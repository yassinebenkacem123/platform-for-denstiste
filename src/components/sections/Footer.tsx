"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { socialLinks } from "@/data/site-data";

const patientLinks = ["About Us", "History", "Before / Afters", "Testimonials", "Contact Us"];
const serviceLinks = ["Preventive Care", "Implant Dentistry", "Cosmetic Dentistry", "Clear Braces", "Dental Emergency"];

export function Footer() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setMessage("Newsletter signup needs an API endpoint before submissions can be accepted."); }
  return (
    <footer id="contact" className="site-shell bg-[#1e1e1e] px-[var(--page-pad)] py-[76px] text-white">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.55fr_2fr] lg:gap-8">
        <FooterColumn title="Patient Information" links={patientLinks} />
        <FooterColumn title="Services" links={serviceLinks} />
        <FooterColumn title="Legal" links={["Privacy Policy", "Terms & Conditions", "Insurance"]} />
        <section><h2 className="text-[21px] tracking-[.03em]">Contact us</h2><address className="mt-5 not-italic text-lg leading-[1.45] tracking-[.07em] text-muted">100 West Street<br />2nd Floor<br />New York, NY 10001</address><a href="tel:2120002299" className="mt-3 flex items-center gap-4 text-lg tracking-[.07em] text-muted hover:text-white"><Image src="/images/phone.png" alt="" width={24} height={24} />212-000-2299</a><a href="mailto:info@dentapro.com" className="mt-2 flex items-center gap-4 text-lg tracking-[.07em] text-muted hover:text-white"><Image src="/images/mail.png" alt="" width={24} height={24} />info@dentapro.com</a></section>
        <section><h2 className="text-[21px] tracking-[.03em]">Stay connected</h2><form onSubmit={submit} className="mt-7"><div className="flex h-12"><label htmlFor="newsletter-email" className="sr-only">Your email address</label><input id="newsletter-email" type="email" required placeholder="Your email address" className="min-w-0 flex-1 border border-white bg-transparent px-4 text-sm tracking-[.07em] placeholder:text-muted" /><button type="submit" className="w-32 bg-white text-[10px] font-bold uppercase tracking-[.07em] text-ink hover:bg-ice">Submit</button></div>{message && <p role="status" className="mt-2 text-xs leading-5 text-muted">{message}</p>}</form><div className="mt-8 flex items-center justify-between">{socialLinks.map(item => <Link key={item.name} href={item.href} aria-label={item.name}><Image src={`/images/social-${item.icon}-white.svg`} alt="" width={20} height={20} className="max-h-5 w-5 object-contain" /></Link>)}</div><p className="mt-8 text-right text-sm tracking-[.07em] text-muted">Copyright © 2023 DentaPro.</p></section>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return <section><h2 className="text-[21px] tracking-[.03em]">{title}</h2><ul className="mt-4 space-y-1 text-lg leading-8 tracking-[.07em] text-muted">{links.map(link => <li key={link}><Link href="#" className="hover:text-white">{link}</Link></li>)}</ul></section>;
}
