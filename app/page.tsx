import Link from "next/link";
import { GumroadButtons } from "@/components/GumroadButtons";
import { getCategoriesWithCounts } from "@/lib/airtable";

export default async function Home() {
  const categories = await getCategoriesWithCounts();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Full-width static hero */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden md:min-h-[520px]">
        <img
          src="/images/hero-bg.png"
          alt="Tanker trucks at sunset in the Permian Basin"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Find your oilfield opportunity!
          </h2>
          <p className="mt-4 text-xl font-medium text-amber-200 md:text-2xl">
            See why the oilfield pays differently
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          HOW TO MAKE $120K WITHOUT OWNING THE TRUCK!
        </h1>
        <p className="mt-6 max-w-3xl text-xl font-medium text-amber-100/95">
          Avoid the fuel and maintenance bills. Just drive, earn, and move free.
        </p>
        <div className="mt-8 max-w-3xl space-y-4 text-lg text-slate-300">
          <p>
            You&apos;re a CDL driver. You probably think you&apos;ve hit your earning
            ceiling, right?
          </p>
          <p>Most drivers do.</p>
          <p>
            Local driving caps out. OTR keeps you away. Regional pays the same as it
            did five years ago.
          </p>
          <p>But what if the ceiling isn&apos;t about you?</p>
          <p>What if it&apos;s about where you work?</p>
        </div>
        <div className="mt-10">
          <GumroadButtons variant="hero" />
        </div>
      </section>

      <section className="border-y border-slate-800/80 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            You&apos;re Right. Most CDL Jobs Cap Out.
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-lg text-slate-300">
            <p>
              You&apos;re not lazy. You&apos;re not doing it wrong. You&apos;re just in
              a structure that was built to keep you capped.
            </p>
            <p>
              Local driving: $50k-$70k. That&apos;s the industry ceiling. You can
              work smarter, work longer, but you&apos;ll still hit a wall.
            </p>
            <p>
              OTR: You leave your family for that. And you still don&apos;t break
              six figures unless you own the truck.
            </p>
            <p>Regional: Slightly better pay, same grinding schedule.</p>
            <p className="font-semibold text-amber-200">
              But here&apos;s what most drivers don&apos;t know:
            </p>
            <p>
              In the oilfield, the structure is different. Drivers aren&apos;t
              hitting $120K because they work harder. They hit it because the
              structure pays them for time, not effort. Guaranteed hourly.
              Guaranteed overtime. No truck ownership required.
            </p>
            <p>
              If you walk into any fuel rack in the Permian, drivers complain about
              the work. Long hours. Hard conditions. But they don&apos;t leave. And
              hiring managers know it.
            </p>
            <p className="font-semibold text-amber-100">
              If the money wasn&apos;t real, they&apos;d be gone.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">What If It Wasn&apos;t About You?</h2>
        <div className="mt-6 max-w-4xl space-y-4 text-lg text-slate-300">
          <p>
            Suppose you worked 65-80 hours a week no matter where you went.
            That&apos;s your reality as a CDL driver. You already sacrifice the
            time.
          </p>
          <p>Now suppose there was a place that paid 2.5x more for that same time.</p>
          <p>Not because the work is easier. It&apos;s not.</p>
          <p>Not because you need to own a truck. You don&apos;t.</p>
          <p>
            But because the structure pays you hourly + overtime, guaranteed. The
            oilfield isn&apos;t designed around saving companies money. It&apos;s
            designed around keeping crews moving 24/7.
          </p>
          <p>
            When you slow down, you stay sharp. When you stay sharp, you avoid
            mistakes. When you avoid mistakes, you stay working.
          </p>
          <p>That&apos;s how consistency compounds.</p>
          <p>
            The $25,000 tax deduction. Hazmat premiums. Federal hour resets that
            other industries don&apos;t get.
            These aren&apos;t tricks. They&apos;re built into the structure.
          </p>
          <p>
            Most drivers don&apos;t know they exist. Recruiters won&apos;t tell
            you. You have to understand the system yourself.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            This Isn&apos;t Theory. It&apos;s Happening Right Now.
          </h2>
          <p className="mt-6 max-w-4xl text-lg text-slate-300">
            Browse real Permian Basin companies hiring non-owners. See the
            structure for yourself. See when they hire. See what they actually look
            for. No sales pitch. Just data.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/directory/${cat.slug}`}
                className="group flex flex-col rounded-xl border border-slate-800 bg-slate-950/60 transition hover:border-amber-400/40 overflow-hidden"
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-36 w-full object-cover"
                  />
                ) : (
                  <div className="h-36 w-full bg-slate-800/40" />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/80">
                    {cat.regulatory}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-slate-100 group-hover:text-amber-200">
                    {cat.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-400">
                    {cat.headline}
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    {cat.payRange} · {cat.companyCount} in directory
                  </p>
                  <span className="mt-4 text-sm font-semibold text-amber-300">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
            <Link
              href="/why-oilfield-pays-more"
              className="group flex flex-col rounded-xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-amber-400/40"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/80">
                70-Hour Multiplier Effect
              </p>
              <h3 className="mt-2 text-lg font-bold leading-snug text-slate-100 group-hover:text-amber-200">
                Why Oilfield Pay Is Built Different
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-400">
                Same CDL. Same license. Completely different annual number.
                Here&apos;s the math.
              </p>
              <span className="mt-auto pt-4 text-sm font-semibold text-amber-300">
                Explore →
              </span>
            </Link>
          </div>
          <div className="mt-10">
            <Link
              href="/directory"
              className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              Explore the directory →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Understand the Real Structure?
        </h2>
        <p className="mt-4 max-w-3xl text-xl text-amber-100/95">
          Strategy is the map. The AI Coach is the engine. Get both.
        </p>
        <div className="mt-6 max-w-4xl space-y-4 text-lg text-slate-300">
          <p>
            Some drivers want to understand the framework and apply it themselves.
            That&apos;s most of you.
          </p>
          <p>
            Some drivers want clarity on their resume, interview strategy, and what
            to expect on day one. They want the framework and personalized guidance.
          </p>
          <p>
            Some drivers want someone walking them through every decision - what
            companies to target, exactly how to position their experience, when to
            move.
          </p>
          <p>
            None of these are better or worse. They&apos;re just different ways to
            get to the same place.
          </p>
          <p>
            The Ebook teaches you the structure so you can evaluate the opportunity
            yourself.
          </p>
          <p>
            The AI Guide helps you execute: resume authority, interview positioning,
            first hitch prep.
          </p>
          <p>
            The Bundle gives you both - the roadmap and the implementation engine.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <GumroadButtons variant="section" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Questions drivers ask</h2>
        <div className="mt-8 space-y-4 text-slate-300">
          <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <summary className="cursor-pointer font-semibold text-amber-200">
              Do I need to own a truck?
            </summary>
            <p className="mt-3">
              That&apos;s actually the first thing most drivers assume. The answer
              is no. Company drivers earn six figures in the oilfield without a
              truck. You&apos;re thinking about it through the traditional CDL
              structure, where ownership was a requirement.
            </p>
          </details>
          <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <summary className="cursor-pointer font-semibold text-amber-200">
              How much experience do I need?
            </summary>
            <p className="mt-3">
              Experience matters, but not how you think. Hiring managers look for
              the right kind of experience, not just years.
            </p>
          </details>
          <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <summary className="cursor-pointer font-semibold text-amber-200">
              Can I really make $120K?
            </summary>
            <p className="mt-3">
              Earnings vary. This is educational. What this does is show you the
              structure so you can evaluate the opportunity yourself.
            </p>
          </details>
          <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <summary className="cursor-pointer font-semibold text-amber-200">
              Is this a scam?
            </summary>
            <p className="mt-3">
              It&apos;s education on a structure that&apos;s publicly available.
              The companies listed are real. The regulations are real. You can
              verify everything yourself.
            </p>
          </details>
          <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <summary className="cursor-pointer font-semibold text-amber-200">
              What if I don&apos;t want to relocate?
            </summary>
            <p className="mt-3">
              That&apos;s a fair choice. This structure works best if you&apos;re
              willing to work oilfield rotation. What matters is choosing
              consciously.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-gradient-to-b from-amber-400/15 to-slate-950 pb-20 pt-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            The Framework Exists. The Directory Is Real. The Math Works.
          </h2>
          <div className="mx-auto mt-4 max-w-3xl space-y-3 text-lg text-slate-300">
            <p>
              You&apos;ve probably hit a point where you know something&apos;s got
              to change, but you&apos;re not sure what.
            </p>
            <p>That&apos;s exactly where you should be before exploring this.</p>
            <p>
              You don&apos;t need hype. You need information. You don&apos;t need a
              cheerleader. You need a structure that actually pays.
            </p>
            <p>Start with the framework. Explore the directory. Talk to the insiders.</p>
            <p>Then decide.</p>
          </div>
          <div className="mt-10 flex justify-center">
            <GumroadButtons variant="section" />
          </div>
        </div>
      </section>
    </main>
  );
}
