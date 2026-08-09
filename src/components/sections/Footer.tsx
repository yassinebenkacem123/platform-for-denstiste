"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { socialLinks } from "@/data/site-data";
import { SocialIcon } from "@/components/ui/SocialIcon";

const patientLinks = ["À propos", "Histoire", "Avant / Après", "Témoignages", "Contactez-nous"];
const serviceLinks = ["Soins préventifs", "Implants dentaires", "Dentisterie esthétique", "Appareils transparents", "Urgence dentaire"];

export function Footer() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setMessage("L'inscription à la newsletter nécessite un point de terminaison API avant que les soumissions puissent être acceptées."); }
  return (
    <footer id="contact" className="site-shell bg-[#1e1e1e] px-[var(--page-pad)] py-[76px] text-white">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.55fr_2fr] lg:gap-8">
        <FooterColumn title="Informations patients" links={patientLinks} />
        <FooterColumn title="Services" links={serviceLinks} />
        <FooterColumn title="Légal" links={["Politique de confidentialité", "Conditions générales", "Assurance"]} />
        <section><h2 className="text-[21px] tracking-[.03em]">Contactez-nous</h2><address className="mt-5 not-italic text-lg leading-[1.45] tracking-[.07em] text-muted">150 Boulevard d&apos;Anfa<br />2ème étage<br />Casablanca, 20000</address><a href="tel:+212522200000" className="mt-3 flex items-center gap-4 text-lg tracking-[.07em] text-muted hover:text-white"><Image src="/images/phone.png" alt="" width={24} height={24} />+212 522 20 00 00</a><a href="mailto:contact@drmansouri.ma" className="mt-2 flex items-center gap-4 text-lg tracking-[.07em] text-muted hover:text-white"><Image src="/images/mail.png" alt="" width={24} height={24} />contact@drmansouri.ma</a></section>
        <section><h2 className="text-[21px] tracking-[.03em]">Restez connecté</h2><form onSubmit={submit} className="mt-7"><div className="flex h-12"><label htmlFor="newsletter-email" className="sr-only">Votre adresse e-mail</label><input id="newsletter-email" type="email" required placeholder="Votre adresse e-mail" className="min-w-0 flex-1 border border-white bg-transparent px-4 text-sm tracking-[.07em] placeholder:text-muted" /><button type="submit" className="w-32 bg-white text-[10px] font-bold uppercase tracking-[.07em] text-ink hover:bg-ice">S&apos;abonner</button></div>{message && <p role="status" className="mt-2 text-xs leading-5 text-muted">{message}</p>}</form><div className="mt-8 flex items-center gap-3.5">{socialLinks.map(item => <Link key={item.name} href={item.href} aria-label={item.name} className="flex size-9 items-center justify-center rounded-full border border-white/20 text-muted transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"><SocialIcon name={item.icon} className="size-4 fill-current" /></Link>)}</div><p className="mt-8 text-right text-sm tracking-[.07em] text-muted">Copyright © 2024 Dr. Mansouri. Tous droits réservés.</p></section>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return <section><h2 className="text-[21px] tracking-[.03em]">{title}</h2><ul className="mt-4 space-y-1 text-lg leading-8 tracking-[.07em] text-muted">{links.map(link => <li key={link}><Link href="#" className="hover:text-white">{link}</Link></li>)}</ul></section>;
}
