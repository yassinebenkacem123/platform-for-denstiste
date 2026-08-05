"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { navigation } from "@/data/site-data";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-[var(--page-pad)] pt-[27px]">
      <div className="mx-auto flex h-10 max-w-[1712px] items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5" aria-label="DentaPro home">
          <Image src="/images/tooth.png" alt="" width={61} height={40} className="h-10 w-[61px] object-contain" priority />
          <span className="text-2xl font-bold tracking-[.01em]">Denta<span className="text-brand">Pro</span></span>
        </Link>
        <nav className="hidden items-center gap-[clamp(2rem,5vw,5.4rem)] xl:flex" aria-label="Primary navigation">
          {navigation.map(([label, href], index) => <Link key={label} href={href} className={`text-xs font-bold uppercase tracking-[.1em] transition hover:text-brand ${index === 0 ? "text-brand" : "text-ink"}`}>{label}</Link>)}
        </nav>
        <ButtonLink href="#appointment" className="hidden w-[168px] xl:inline-flex">Prendre rendez-vous</ButtonLink>
        <button type="button" className="grid size-11 place-items-center xl:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <span className="relative block h-4 w-6"><span className={`absolute left-0 top-0 h-0.5 w-6 bg-ink transition ${open ? "translate-y-[7px] rotate-45" : ""}`} /><span className={`absolute left-0 top-[7px] h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} /><span className={`absolute left-0 top-[14px] h-0.5 w-6 bg-ink transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} /></span>
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.nav initial={reduced ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-4 grid gap-1 border border-black/5 bg-white p-3 shadow-xl xl:hidden" aria-label="Navigation mobile">{navigation.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase tracking-wider hover:bg-ice">{label}</Link>)}<ButtonLink href="#appointment" className="mt-2">Prendre rendez-vous</ButtonLink></motion.nav>}
      </AnimatePresence>
    </header>
  );
}
