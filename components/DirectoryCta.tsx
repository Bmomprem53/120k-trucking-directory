import Link from "next/link";

export function DirectoryCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/ebook"
      className={`inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300 ${className}`}
    >
      Get the hiring framework
    </Link>
  );
}
