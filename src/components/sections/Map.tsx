import { Reveal } from "@/components/ui/Reveal";

export function Map() {
  return (
    <section id="map" aria-label="Notre emplacement" className="site-shell overflow-hidden">
      {/* Info bar above the map */}
      <Reveal className="flex flex-col items-center gap-4 bg-[#1e1e1e] px-[var(--page-pad)] py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-brand">Trouvez-nous</p>
          <p className="mt-1 text-lg font-semibold tracking-[.03em]">Cabinet Dr. Mansouri &mdash; 150 Boulevard d&apos;Anfa, Casablanca 20000</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 sm:justify-end">
          <a href="tel:+212522200000" className="flex items-center gap-2 text-sm tracking-[.07em] text-muted transition hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12.3 19.79 19.79 0 0 1 1.6 3.68 2 2 0 0 1 3.58 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.06a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/></svg>
            +212 522 20 00 00
          </a>
          <a href="mailto:contact@drmansouri.ma" className="flex items-center gap-2 text-sm tracking-[.07em] text-muted transition hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            contact@drmansouri.ma
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=150+Boulevard+d%27Anfa+Casablanca+Morocco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand px-5 py-2.5 text-[10px] font-bold uppercase tracking-[.07em] text-white transition hover:bg-[#478da5]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Itinéraire
          </a>
        </div>
      </Reveal>

      {/* Google Maps embed — Casablanca, Morocco */}
      <div className="relative h-[400px] w-full sm:h-[460px] lg:h-[500px]">
        <iframe
          title="Localisation du cabinet dentaire du Dr. Mansouri à Casablanca"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7153401509315!2d-7.632822423528438!3d33.58679094220038!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e742878d6b%3A0xb35a09d3b145fa35!2sBd%20d%27Anfa%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1722895200000!5m2!1sfr!2sma"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

