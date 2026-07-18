import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Wix_Madefor_Display, Wix_Madefor_Text, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

// Google Consent Mode v2 — stato di default NEGATO, impostato prima che GA4 parta.
// Se l'utente ha già scelto (localStorage), riapplichiamo subito la sua preferenza.
const CONSENT_DEFAULT = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);
try{var c=JSON.parse(localStorage.getItem('nie_consent'));if(c){gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied'});}}catch(e){}
`;

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
  ...(site.googleVerification
    ? { verification: { google: site.googleVerification } }
    : {}),
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0f2440",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${wixDisplay.variable} ${wixText.variable} ${lora.variable}`}>
      <body>
        <Script id="consent-default" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
        <GoogleTagManager gtmId={site.analytics.gtm} />
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <GoogleAnalytics gaId={site.analytics.ga4} />
      </body>
    </html>
  );
}
