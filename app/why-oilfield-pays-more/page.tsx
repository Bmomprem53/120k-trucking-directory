import Link from "next/link";
import { DirectoryCta } from "@/components/DirectoryCta";

export const metadata = {
  title: "Why Oilfield Pay Is Built Different | 120K Oilfield Driver",
  description:
    "Same CDL, same license, completely different annual number. The 70-hour multiplier effect explained.",
};

export default function WhyOilfieldPaysMorePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm text-amber-300">
            ← Home
          </Link>
          <Link
            href="/directory"
            className="text-sm text-slate-500 hover:text-slate-300"
          >
            Directory
          </Link>
        </div>
      </header>

      {/* Hero image slot — replace src when ready */}
      <div className="mx-auto max-w-4xl px-6 pt-10">
        <div className="h-56 w-full rounded-xl bg-slate-800/40 md:h-72" />
      </div>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-400/90">
          70-Hour Multiplier Effect
        </p>
        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
          Why Oilfield Pay Is Built Different
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Same CDL. Same license. Completely different annual number.
          Here&apos;s the math.
        </p>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-bold text-slate-100">
            The Multiplier
          </h2>
          <p className="text-slate-300">
            Working 70 hours instead of 40 is not a 75% pay increase. It is a
            112.5% increase because every hour over 40 pays at 1.5x.
          </p>
          <p className="text-slate-300">
            A $24/hr job at 70 hours generates{" "}
            <span className="font-semibold text-amber-200">
              $106,080 annually
            </span>
            . That same income requires $51/hr in a standard 40-hour
            environment.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-bold text-slate-100">
            The Per Diem Shield
          </h2>
          <p className="text-slate-300">
            Daily allowances of $15–$150 are non-taxable. A driver on a 14/7
            rotation at $50/day adds{" "}
            <span className="font-semibold text-amber-200">
              $700 non-taxable every two weeks
            </span>{" "}
            — money that never appears on a W2.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-bold text-slate-100">
            Housing Value
          </h2>
          <p className="text-slate-300">
            Man camps and paid hotels in Midland/Odessa are worth $1,500–$2,500
            per month. That is{" "}
            <span className="font-semibold text-amber-200">
              $18,000–$30,000 in annual compensation
            </span>{" "}
            most drivers never calculate.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-bold text-slate-100">
            The 70-Hour Standard
          </h2>
          <p className="text-slate-300">
            ELD enforcement locked in the 70-hour week as the market rate. The
            oilfield exemption allows a 24-hour restart instead of 34 hours —
            meaning drivers can maintain that schedule legally and consistently.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-bold text-slate-100">
            The Real Number
          </h2>
          <p className="text-slate-300">
            At $35/hr base on a 70-hour week, annual gross is{" "}
            <span className="font-semibold text-amber-200">$154,700</span>. At
            $35/hr on an 80-hour week, it is{" "}
            <span className="font-semibold text-amber-200">$182,000</span>.
          </p>
          <p className="text-slate-300">
            The floor is six figures. The ceiling depends on your calendar.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="text-xl font-bold text-slate-100">What now?</h2>
          <p className="mt-3 text-slate-400">
            Explore the four lanes to see how this multiplier plays out in each
            category, or grab the hiring framework to position yourself.
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
