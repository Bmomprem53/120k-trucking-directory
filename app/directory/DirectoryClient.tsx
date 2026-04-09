"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CategoryWithCount, DirectoryCompany } from "@/lib/airtable";

type Props = {
  categories: CategoryWithCount[];
  companies: DirectoryCompany[];
};

export function DirectoryClient({ categories, companies }: Props) {
  const [q, setQ] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [hiringOnly, setHiringOnly] = useState(false);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return companies.filter((c) => {
      if (hiringOnly) {
        const s = c.hiringStatus.toLowerCase();
        if (!s.includes("open") && !s.includes("yes") && !s.includes("hiring")) {
          if (s !== "active") return false;
        }
      }
      if (categoryFilter && c.category !== categoryFilter) {
        if (!c.category.toLowerCase().includes(categoryFilter.toLowerCase())) {
          return false;
        }
      }
      if (!query) return true;
      const blob = `${c.name} ${c.category} ${c.payRange} ${c.hiringStatus}`.toLowerCase();
      return blob.includes(query);
    });
  }, [companies, q, categoryFilter, hiringOnly]);

  const categoryNames = useMemo(() => {
    const cats = companies.map((c) => c.category).filter(Boolean);
    return Array.from(new Set(cats));
  }, [companies]);

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-slate-100">Categories</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/directory/${cat.slug}`}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-amber-400/50"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/90">
                {cat.regulatory}
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-100 group-hover:text-amber-200">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{cat.payRange}</p>
              <p className="mt-2 text-xs text-slate-500">
                {cat.companyCount} listed in directory
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-amber-300">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-xl font-bold text-slate-100">Search & filter</h2>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">
          <label className="flex flex-1 flex-col gap-1 text-sm text-slate-400">
            Search
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Company name, pay, status…"
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-600"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-400">
            Category
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
            >
              <option value="">All</option>
              {categoryNames.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={hiringOnly}
              onChange={(e) => setHiringOnly(e.target.checked)}
              className="rounded border-slate-600"
            />
            Prefer open / hiring
          </label>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-100">
          Companies ({filtered.length})
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.length === 0 ? (
            <p className="text-slate-400">
              No matches. Try clearing filters — companies sync from your directory
              when added in Airtable.
            </p>
          ) : (
            filtered.map((co) => (
              <Link
                key={co.id}
                href={`/directory/${co.slug}`}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-slate-600"
              >
                <h3 className="text-lg font-semibold text-amber-200">{co.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{co.category}</p>
                <p className="mt-2 text-sm text-slate-300">{co.payRange}</p>
                <p className="mt-1 text-xs text-slate-500">{co.hiringStatus}</p>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
