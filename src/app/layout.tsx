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
  title: "DentaPro | Expert dental care for the whole family",
  description:
    "Preventive, restorative, cosmetic, orthodontic, surgical, and implant dental care for the whole family.",
  openGraph: {
    title: "DentaPro | Expert dental care",
    description: "Everything you need for a healthy, beautiful smile in one place.",
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
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
