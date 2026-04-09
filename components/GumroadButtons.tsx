const LINKS = {
  ebook: "https://mompremiermediagroup.gumroad.com/l/apvnkz",
  guide: "https://mompremiermediagroup.gumroad.com/l/ppxphh",
  bundle: "https://mompremiermediagroup.gumroad.com/l/zurzc",
} as const;

type Variant = "hero" | "section" | "footer";

export function GumroadButtons({ variant = "section" }: { variant?: Variant }) {
  const isHero = variant === "hero";
  const gap = isHero ? "gap-3 sm:gap-4" : "gap-3";
  const wrap = "flex flex-col sm:flex-row sm:flex-wrap";

  return (
    <div className={`${wrap} ${gap}`}>
      {/* Bundle — largest, primary */}
      <a
        href={LINKS.bundle}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-[52px] items-center justify-center rounded-lg bg-amber-400 px-8 py-4 text-center text-base font-bold text-slate-950 shadow-lg shadow-amber-400/25 transition hover:bg-amber-300 ${
          isHero ? "sm:min-w-[280px]" : ""
        }`}
      >
        Complete Toolkit – $97{" "}
        <span className="ml-1 whitespace-nowrap">(Saves $17)</span>
      </a>

      {/* Ebook — secondary */}
      <a
        href={LINKS.ebook}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 border-amber-400/80 bg-slate-900/80 px-6 py-3 text-center text-sm font-semibold text-amber-200 transition hover:bg-slate-800 ${
          isHero ? "" : "max-sm:w-full"
        }`}
      >
        Understand The Framework ($47)
      </a>

      {/* Guide — tertiary */}
      <a
        href={LINKS.guide}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-600 bg-slate-800/60 px-5 py-2.5 text-center text-xs font-medium text-slate-200 transition hover:bg-slate-700 ${
          isHero ? "" : "max-sm:w-full"
        }`}
      >
        Just The AI Guide ($67)
      </a>
    </div>
  );
}

export function GumroadButtonsEbookPage() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
      <a
        href={LINKS.bundle}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[56px] flex-1 items-center justify-center rounded-lg bg-amber-400 px-8 py-4 text-center text-base font-bold text-slate-950 shadow-lg transition hover:bg-amber-300"
      >
        Complete Toolkit – $97 <span className="ml-1">(Saves $17)</span>
      </a>
      <a
        href={LINKS.ebook}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-lg border-2 border-amber-400/90 bg-slate-950 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:bg-slate-900"
      >
        Understand The Framework ($47)
      </a>
      <a
        href={LINKS.guide}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-slate-600 bg-slate-900 px-5 py-2.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800"
      >
        Just The AI Guide ($67)
      </a>
    </div>
  );
}
