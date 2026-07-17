import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-wix-display",
  display: "swap",
});

const wixText = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-wix-text",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "controllo di gestione edilizia",
    "controllo di gestione impresa edile",
    "margine di commessa",
    "redditività impresa di costruzioni",
    "come guadagnare di più impresa edile",
    "budget di cantiere",
    "analisi costi impresa edile",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${wixDisplay.variable} ${wixText.variable} ${lora.variable}`}>
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
