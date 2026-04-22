import Link from "next/link";
import { notFound } from "next/navigation";
import { DirectoryCta } from "@/components/DirectoryCta";
import { getCategoryBySlug } from "@/lib/regulatory-categories";
import { getCompanyBySlug } from "@/lib/airtable";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const cat = getCategoryBySlug(slug);
  if (cat) {
    return { title: `${cat.name} | Directory` };
  }
  const co = await getCompanyBySlug(slug);
  if (co) {
    return { title: `${co.name} | Directory` };
  }
  return { title: "Directory" };
}

export default async function DirectorySlugPage({ params }: Props) {
  const { slug } = params;
  const category = getCategoryBySlug(slug);

  if (category) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/directory" className="text-sm text-amber-300">
              ← Directory
            </Link>
            <Link href="/" className="text-sm text-slate-500 hover:text-slate-300">
              Home
            </Link>
          </div>
        </header>

        {category.heroImage && (
          <div className="mx-auto max-w-4xl px-6 pt-10">
            <img
              src={category.heroImage}
              alt={category.name}
              className="h-56 w-full rounded-xl object-cover md:h-72"
            />
          </div>
        )}

        <article className="mx-auto max-w-4xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-400/90">
            {category.regulatory}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            {category.headline}
          </h1>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-bold text-slate-100">
              Why drivers look here first
            </h2>
            <p className="text-slate-300">{category.why}</p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-bold text-slate-100">
              What the rule is doing in your favor
            </h2>
            <p className="whitespace-pre-line text-slate-300">{category.copy}</p>
            {category.whyItMatters && category.whyItMatters.length > 0 && (
              <ul className="list-inside list-disc space-y-2 text-slate-400">
                {category.whyItMatters.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-bold text-slate-100">
              Pay & barrier (honest snapshot)
            </h2>
            {category.paySectionExtra ? (
              <p className="whitespace-pre-line text-slate-300">
                {category.paySectionExtra}
              </p>
            ) : (
              <p className="text-slate-300">
                <span className="font-semibold text-amber-200">Pay range:</span>{" "}
                {category.payRange}
              </p>
            )}
            <p className="text-slate-300">
              <span className="font-semibold text-amber-200">Barrier:</span>{" "}
              {category.barrierLevel}
            </p>
          </section>

          <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900/50 p-8">
            <h2 className="text-xl font-bold text-slate-100">What now?</h2>
            <p className="mt-3 text-slate-400">
              Browse the full directory for companies in this lane, or grab the
              hiring framework so you know how to talk to recruiters like you mean
              it.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/directory"
                className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                Back to directory
              </Link>
              <DirectoryCta />
            </div>
          </section>
        </article>
      </main>
    );
  }

  const company = await getCompanyBySlug(slug);
  if (!company) notFound();

  const overview =
    company.overview ||
    `${company.name} is listed in the directory. Add an overview in Airtable (Companies → Overview) to personalize this page.`;
  const hiring =
    company.hiringPicture ||
    "Hiring can shift week to week. Verify pay, schedule, and home time directly with the carrier.";
  const insider =
    company.insiderPerspective ||
    "What do drivers say after 90 days? Ask in forums and at the yard—not just the recruiter.";
  const alignment =
    company.alignmentCheck ||
    "Does this lane match your CDL, endorsements, and tolerance for rotation? If two of three are off, keep looking.";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/directory" className="text-sm text-amber-300">
            ← Directory
          </Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-300">
            Home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <div className="flex items-start gap-5">
          {company.image ? (
            <img
              src={company.image}
              alt={company.name}
              className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
            />
          ) : (
            <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-slate-800/60" />
          )}
          <div>
            <p className="text-sm text-slate-500">{company.category}</p>
            <h1 className="mt-1 text-4xl font-extrabold">{company.name}</h1>
            <p className="mt-2 text-amber-200/90">{company.payRange}</p>
            <p className="mt-1 text-sm text-slate-500">{company.hiringStatus}</p>
          </div>
        </div>

        <section className="mt-12 space-y-3">
          <h2 className="text-xl font-bold">Company overview</h2>
          <p className="text-slate-300">{overview}</p>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="text-xl font-bold">Real hiring picture</h2>
          <p className="text-slate-300">{hiring}</p>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="text-xl font-bold">Insider perspective</h2>
          <p className="text-slate-300">{insider}</p>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="text-xl font-bold">Alignment check</h2>
          <p className="text-slate-300">{alignment}</p>
        </section>

        <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="text-xl font-bold">Next steps</h2>
          <p className="mt-3 text-slate-400">
            Want the exact language and sequence for moving conversations forward?
          </p>
          <div className="mt-6">
            <DirectoryCta />
          </div>
        </section>
      </article>
    </main>
  );
}
