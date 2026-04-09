import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="font-bold text-amber-300">
          120K Oilfield Driver
        </Link>
        <nav className="flex flex-wrap gap-5 text-sm text-slate-400">
          <Link href="/directory" className="hover:text-slate-100">
            Directory
          </Link>
          <Link href="/ebook" className="hover:text-slate-100">
            Hiring framework
          </Link>
        </nav>
      </div>
    </header>
  );
}
