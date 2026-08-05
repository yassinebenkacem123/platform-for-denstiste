import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`inline-flex min-h-10 items-center justify-center bg-brand px-6 text-[10px] font-bold uppercase tracking-[.07em] text-white transition hover:bg-[#478da5] active:scale-[.98] ${className}`}>
      {children}
    </Link>
  );
}
