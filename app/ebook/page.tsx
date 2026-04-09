import Link from "next/link";
import { GumroadButtonsEbookPage } from "@/components/GumroadButtons";

export const metadata = {
  title: "Hiring Framework & Toolkit | 120K Oilfield Driver",
  description:
    "How $120K+ in oilfield trucking works without owning the truck.",
};

export default function EbookPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          It Can&apos;t Be True.
        </h1>
        <p className="mt-6 text-xl font-medium text-amber-100/90">
          Most drivers think that. Here&apos;s exactly how it works.
        </p>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-300">
          <p>You&apos;re skeptical. That&apos;s smart.</p>
          <p>It&apos;s the second one.</p>
          <p>
            The oilfield structure isn&apos;t built like traditional trucking.
            It&apos;s 24/7 operations. Guaranteed hourly rates. Mandatory overtime.
            You&apos;re not fighting for loads or negotiating rates. The structure
            pays you for availability.
          </p>
          <p>Want to know what insiders know that job postings hide?</p>
        </div>
        <div className="mt-10">
          <GumroadButtonsEbookPage />
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/45">
        <div className="mx-auto max-w-4xl space-y-8 px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-100">What&apos;s inside</h2>

          <div className="space-y-7 text-slate-300">
            <div>
              <p className="text-lg font-semibold text-amber-200">
                Why oilfield pay is structured so differently (and why most drivers
                miss it)
              </p>
              <p className="mt-2 text-lg">
                What would you make if you worked 65+ hours a week with guaranteed
                overtime in your market? Most drivers haven&apos;t calculated it.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-amber-200">
                Why &quot;local&quot; in the oilfield isn&apos;t local anywhere else
                (and what that means for your schedule)
              </p>
              <p className="mt-2 text-lg">
                What would &quot;local&quot; mean if it paid 2.5x more than actual
                local driving? Would the trade-off make sense?
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-amber-200">
                Owner-operators vs. company drivers (which path actually fits your
                lifestyle)
              </p>
              <p className="mt-2 text-lg">
                What&apos;s your priority: maximum income or income without overhead?
                That one answer changes everything.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-amber-200">
                Choosing your path (because lifestyle before ego is the actual
                framework)
              </p>
              <p className="mt-2 text-lg">
                What does &quot;success&quot; mean to you? That answer determines
                which lane you belong in.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-amber-200">
                Getting hired fast (alignment beats time)
              </p>
              <p className="mt-2 text-lg">
                Want to know what hiring managers actually look for, beyond what job
                postings tell you? That&apos;s insider knowledge.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-amber-200">
                Staying alive and succeeding (longevity is the advantage)
              </p>
              <p className="mt-2 text-lg">
                Safety isn&apos;t a rule-it&apos;s an income strategy. Here&apos;s
                why that matters.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-amber-200">
                Moving from knowledge to action (choose the level of support that
                fits you)
              </p>
              <p className="mt-2 text-lg">
                Most people fall into one of three groups after reading this. Which
                one are you?
              </p>
            </div>
          </div>

          <div className="pt-4">
            <GumroadButtonsEbookPage />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-6 py-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-100">Who this is for</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-lg text-slate-300">
            <li>Do you already have a CDL? (You&apos;ll need one.)</li>
            <li>
              Are you tired of limits? (This book is about understanding why limits
              exist - and where they don&apos;t.)
            </li>
            <li>
              Do you want framework, not motivation? (No &quot;you can do this!&quot;
              here. Just structure.)
            </li>
            <li>Are you willing to relocate? (That&apos;s part of the structure.)</li>
            <li>
              Are you open to looking at a different way? (This is for people who
              are.)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-100">Who this isn&apos;t for</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-lg text-slate-300">
            <li>
              If you want someone to hold your hand, this might not be it. (Though
              consulting exists - but we price it to reflect real-time commitment. Most
              people figure this out themselves using the ebook + guide.)
            </li>
            <li>
              If you&apos;re looking for a shortcut, this isn&apos;t for you. (There
              is no shortcut. There&apos;s just structure.)
            </li>
            <li>
              If you want guarantees, this isn&apos;t it. (Earnings vary. This is
              educational. What it does do is show you the structure so you can
              evaluate the opportunity yourself.)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-100">Want to Take It Further?</h2>
          <div className="mt-4 space-y-3 text-lg text-slate-300">
            <p>The ebook teaches the framework. The guide helps you execute it.</p>
            <p>Resume authority. Interview positioning. First hitch prep.</p>
            <p>You could apply everything yourself. Most people do.</p>
            <p>
              Or you could use the AI Guide to walk through your specific situation.
            </p>
            <p>Either way works. It&apos;s just about what you prefer.</p>
          </div>
        </div>

        <div className="pt-2">
          <GumroadButtonsEbookPage />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-100">
            When you buy, you get access to our directory
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Research the companies this framework applies to. See if the structure is
            real.
          </p>
          <p className="mt-4">
            <Link href="/directory" className="text-amber-300 hover:underline">
              Explore the Directory ?
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/45">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-100">FAQ</h2>
          <div className="mt-8 space-y-4">
            <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <summary className="cursor-pointer font-semibold text-amber-200">
                What format is the ebook?
              </summary>
              <p className="mt-3 text-slate-300">
                It&apos;s a PDF. Delivered instantly via Gumroad. You own it forever.
              </p>
            </details>
            <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <summary className="cursor-pointer font-semibold text-amber-200">
                Can I share this with others?
              </summary>
              <p className="mt-3 text-slate-300">
                No, it&apos;s for personal use. But the knowledge is yours to use
                however you see fit.
              </p>
            </details>
            <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <summary className="cursor-pointer font-semibold text-amber-200">
                What if I want 1-on-1 help?
              </summary>
              <p className="mt-3 text-slate-300">
                Consulting is available. But it&apos;s priced to reflect real time
                commitment. Most people figure this out themselves using the ebook +
                guide.
              </p>
            </details>
            <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <summary className="cursor-pointer font-semibold text-amber-200">
                Is this guaranteed to get me hired?
              </summary>
              <p className="mt-3 text-slate-300">
                No. Earnings vary. This is educational. What it does do is show you
                the structure so you can evaluate the opportunity yourself.
              </p>
            </details>
            <details className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <summary className="cursor-pointer font-semibold text-amber-200">
                How much experience do I need?
              </summary>
              <p className="mt-3 text-slate-300">
                Experience matters, but not how you think. Hiring managers look for
                the right kind of experience, not just years. The guide walks you
                through how to translate your experience.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-gradient-to-b from-amber-400/10 to-slate-950 pb-20 pt-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            You have the framework. The directory is there. The decision is yours.
          </h2>
          <div className="mx-auto mt-4 max-w-2xl space-y-3 text-slate-300">
            <p>Knowledge and execution are different things.</p>
            <p>Some people prefer to take what they&apos;ve learned and run with it.</p>
            <p>Others want guidance while they move.</p>
            <p>
              Neither approach is better. They&apos;re just different ways to cross
              the same gap.
            </p>
            <p>The ebook gets you the map. The guide gets you the engine.</p>
          </div>
          <div className="mt-10 flex justify-center">
            <GumroadButtonsEbookPage />
          </div>
          <p className="mt-10 text-sm text-slate-500">
            <Link href="/directory" className="text-amber-400/90 hover:underline">
              Explore the directory
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
