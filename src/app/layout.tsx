import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Outfit({ variable: "--font-sans", subsets: ["latin"] });
const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DentaPro | Soins dentaires experts pour toute la famille",
  description:
    "Soins dentaires préventifs, restaurateurs, esthétiques, orthodontiques, chirurgicaux et implantaires pour toute la famille.",
  openGraph: {
    title: "DentaPro | Soins dentaires experts",
    description: "Tout ce dont vous avez besoin pour un sourire sain et éclatant en un seul endroit.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
