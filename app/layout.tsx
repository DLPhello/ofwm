import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.oatleywines.com.au";
const site = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase: site,
  title: {
    default: "Oatley Fine Wine Merchants",
    template: "%s | Oatley Fine Wine Merchants",
  },
  description:
    "Premium wine distribution across Australia. Curated portfolios from leading domestic and international producers.",
  applicationName: "Oatley Fine Wine Merchants",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Oatley Fine Wine Merchants",
    description:
      "Premium wine distribution across Australia. Curated portfolios from leading producers.",
    locale: "en_AU",
    type: "website",
    url: site,
    siteName: "Oatley Fine Wine Merchants",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oatley Fine Wine Merchants",
    description:
      "Premium wine distribution across Australia. Curated portfolios from leading producers.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Oatley Fine Wine Merchants",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Premium wine distribution across Australia. Curated portfolios from leading domestic and international producers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 3, 100 Pacific Hwy",
    addressLocality: "St Leonards",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+61-1800-628-539",
    email: "orders@oatleywines.com.au",
    areaServed: "AU",
    availableLanguage: ["en-AU"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Oatley Fine Wine Merchants",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
