import { REGULATORY_CATEGORIES, type RegulatoryCategory } from "./regulatory-categories";

const AIRTABLE_API = "https://api.airtable.com/v0";

function getEnv() {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_TOKEN;
  return { baseId, token };
}

function pickField(
  fields: Record<string, unknown>,
  keys: string[]
): string | undefined {
  const lower = Object.fromEntries(
    Object.entries(fields).map(([k, v]) => [k.toLowerCase(), v])
  );
  for (const key of keys) {
    const val = fields[key] ?? lower[key.toLowerCase()];
    if (val != null && val !== "") {
      if (Array.isArray(val)) {
        const first = val[0];
        if (typeof first === "string") return first;
        if (first && typeof first === "object" && "name" in first) {
          return String((first as { name?: string }).name ?? "");
        }
      }
      return String(val);
    }
  }
  return undefined;
}

export type DirectoryCompany = {
  id: string;
  name: string;
  slug: string;
  category: string;
  payRange: string;
  hiringStatus: string;
  overview: string;
  hiringPicture: string;
  insiderPerspective: string;
  alignmentCheck: string;
};

type AirtableListResponse = {
  records: Array<{ id: string; fields: Record<string, unknown> }>;
};

async function fetchTable(tableName: string): Promise<AirtableListResponse | null> {
  const { baseId, token } = getEnv();
  if (!baseId || !token) return null;

  const url = `${AIRTABLE_API}/${baseId}/${encodeURIComponent(tableName)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    console.error(`Airtable ${tableName}: ${res.status}`, await res.text());
    return null;
  }

  return res.json();
}

function recordToCompany(
  id: string,
  fields: Record<string, unknown>
): DirectoryCompany | null {
  const name = pickField(fields, ["Name", "Company", "Company Name"]);
  const slug = pickField(fields, ["Slug", "URL Slug", "slug"]);
  if (!name || !slug) return null;

  return {
    id,
    name,
    slug: slug.toLowerCase().replace(/\s+/g, "-"),
    category: pickField(fields, ["Category", "Categories", "Lane"]) ?? "",
    payRange: pickField(fields, ["Pay Range", "Pay", "Compensation"]) ?? "",
    hiringStatus:
      pickField(fields, ["Hiring Status", "Status", "Open"]) ?? "Unknown",
    overview:
      pickField(fields, ["Overview", "Company Overview", "Description"]) ?? "",
    hiringPicture:
      pickField(fields, [
        "Real Hiring Picture",
        "Hiring Picture",
        "Hiring Reality",
      ]) ?? "",
    insiderPerspective:
      pickField(fields, ["Insider Perspective", "Insider"]) ?? "",
    alignmentCheck:
      pickField(fields, ["Alignment Check", "Alignment"]) ?? "",
  };
}

export async function fetchCompaniesFromAirtable(): Promise<DirectoryCompany[]> {
  const data = await fetchTable("Companies");
  if (!data?.records?.length) return [];

  const out: DirectoryCompany[] = [];
  for (const r of data.records) {
    const c = recordToCompany(r.id, r.fields);
    if (c) out.push(c);
  }
  return out;
}

/** Count companies per category slug (matches Category field to static slug name or slug) */
export function countCompaniesByCategorySlug(
  companies: DirectoryCompany[],
  category: RegulatoryCategory
): number {
  const targets = [
    category.name,
    category.slug,
    category.slug.replace(/-/g, " "),
  ].map((s) => s.toLowerCase());

  return companies.filter((co) => {
    const cat = co.category.toLowerCase();
    return targets.some((t) => cat.includes(t) || t.includes(cat));
  }).length;
}

export type CategoryWithCount = RegulatoryCategory & { companyCount: number };

export async function getCategoriesWithCounts(): Promise<CategoryWithCount[]> {
  const companies = await fetchCompaniesFromAirtable();

  const airtableCategories = await fetchTable("Categories");
  const slugToCount = new Map<string, number>();

  if (airtableCategories?.records) {
    for (const r of airtableCategories.records) {
      const f = r.fields;
      let slug =
        pickField(f, ["Slug", "slug", "URL Slug"])?.toLowerCase() ?? "";
      const name = pickField(f, ["Name", "Category", "Title"]);
      if (!slug && name) {
        const match = REGULATORY_CATEGORIES.find(
          (c) => c.name.toLowerCase() === name.toLowerCase()
        );
        if (match) slug = match.slug;
      }

      const countRaw = pickField(f, [
        "Company Count",
        "Companies Count",
        "Count",
      ]);
      let count = countRaw ? parseInt(countRaw, 10) : NaN;
      if (Number.isNaN(count)) {
        if (name) {
          count = companies.filter(
            (c) => c.category.toLowerCase() === name.toLowerCase()
          ).length;
        } else {
          count = 0;
        }
      }
      if (slug) slugToCount.set(slug, count);
    }
  }

  return REGULATORY_CATEGORIES.map((cat) => {
    const fromAirtable = slugToCount.get(cat.slug);
    const computed =
      fromAirtable !== undefined
        ? fromAirtable
        : countCompaniesByCategorySlug(companies, cat);
    return { ...cat, companyCount: computed };
  });
}

export async function getCompanyBySlug(
  slug: string
): Promise<DirectoryCompany | null> {
  const companies = await fetchCompaniesFromAirtable();
  const normalized = slug.toLowerCase();
  return (
    companies.find((c) => c.slug === normalized) ?? null
  );
}
