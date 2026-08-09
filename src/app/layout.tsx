import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const sans = Outfit({ variable: "--font-sans", subsets: ["latin"] });
const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dr. Mansouri | Cabinet Dentaire à Casablanca",
  description:
    "Cabinet dentaire du Dr. Mansouri à Casablanca. Soins dentaires préventifs, restaurateurs, esthétiques, orthodontiques, chirurgicaux et implantaires.",
  openGraph: {
    title: "Dr. Mansouri | Cabinet Dentaire à Casablanca",
    description: "Tout ce dont vous avez besoin pour un sourire sain et éclatant avec le Dr. Mansouri.",
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
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
