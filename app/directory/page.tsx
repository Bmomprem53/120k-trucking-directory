import { DirectoryClient } from "./DirectoryClient";
import { fetchCompaniesFromAirtable, getCategoriesWithCounts } from "@/lib/airtable";
import { DirectoryCta } from "@/components/DirectoryCta";

export const metadata = {
  title: "Oilfield Directory | 120K Oilfield Driver",
  description:
    "Regulatory arbitrage categories and company directory for CDL oilfield drivers.",
};

export default async function DirectoryPage() {
  const [categories, companies] = await Promise.all([
    getCategoriesWithCounts(),
    fetchCompaniesFromAirtable(),
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          The Four Pillars of Oilfield Trucking
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Don&apos;t chase random job postings. Understand the categories, the math,
          and the requirements before you apply.
        </p>
        <div className="mt-8">
          <DirectoryCta />
        </div>

        <div className="mt-14">
          <DirectoryClient categories={categories} companies={companies} />
        </div>
        <div className="mt-14 rounded-xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-slate-300">
            You can read through the math, but knowing the categories is only half
            the battle. If you want the exact framework to position yourself for
            top-tier jobs in these sectors, the 120K Oilfield Driver ebook details
            the exact steps.
          </p>
          <div className="mt-6">
            <DirectoryCta />
          </div>
        </div>
      </div>
    </main>
  );
}
