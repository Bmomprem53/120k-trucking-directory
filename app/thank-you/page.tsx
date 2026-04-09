import Link from "next/link";

type ProductKey = "ebook" | "guide" | "bundle";

function labelForProduct(p: string | undefined): { title: string; blurb: string } {
  const key = (p?.toLowerCase() ?? "") as ProductKey;
  if (key === "guide") {
    return {
      title: "AI Guide",
      blurb:
        "You have the engine. Use the prompts to position your resume, prepare your interview, and structure your first hitch.",
    };
  }
  if (key === "bundle") {
    return {
      title: "Complete Toolkit",
      blurb:
        "You have the complete toolkit: the roadmap to understand the structure, and the engine to execute it.",
    };
  }
  return {
    title: "Framework (ebook)",
    blurb:
      "You have the roadmap. You now understand the categories, the structure, and what hiring managers actually look for.",
  };
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const raw = searchParams.product;
  const product = Array.isArray(raw) ? raw[0] : raw;
  const { title, blurb } = labelForProduct(product);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <h1 className="text-3xl font-extrabold md:text-4xl">
          Thank you for your purchase.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          You just invested in understanding the real structure. That&apos;s the
          first step. Most people who read this stop at knowledge. You&apos;re taking
          it further.
        </p>
        <p className="mt-6 text-slate-400">
          Your files are being delivered securely by Gumroad (check promotions/spam
          too). You also have full access to our public directory right here on the
          site, so you can begin your research.
        </p>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-slate-300">
          <p className="text-sm uppercase tracking-wide text-amber-300">
            What you have now
          </p>
          <p className="mt-3 font-semibold text-amber-200">{title}</p>
          <p className="mt-2">{blurb}</p>
        </div>

        <div className="mt-10 space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-slate-300">
          <p className="font-semibold text-amber-200">If you get stuck</p>
          <p>
            Can&apos;t find your email? Check spam/promotions, or reload this page if
            you just purchased.
          </p>
          <p>
            Lost your download link? Reply directly to the receipt email from Gumroad.
          </p>
          <p>
            Want to download again later? Gumroad links do not expire. Your assets
            stay available in your Gumroad library.
          </p>
        </div>

        <div className="mt-10 space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-slate-300">
          <p>
            You have everything you need to understand the opportunity. Read the
            material. Learn the framework. Verify the structure through the directory.
            Execute your strategy.
          </p>
          <p>There is no timeline pressure. Just: go when you&apos;re ready.</p>
          <p>
            This knowledge is yours now. Use it well.
          </p>
          <p>
            — Brouce
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-sm">
          <Link
            href="/directory"
            className="font-semibold text-amber-300 hover:underline"
          >
            Head to the directory →
          </Link>
          <Link href="/" className="text-slate-500 hover:text-slate-300">
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
