import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import AosInitializer from "@/components/aos-initializer";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import TawkToWidget from "@/components/tawk-to-widget";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgcctechsolutions.com";
const SITE_NAME = "DGCC Tech Limited";
const SITE_TAGLINE = "Connecting dots in tech";
const SITE_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;
const SITE_DESCRIPTION =
  "Web design, IT support, cyber security, branding, printing and tech training from DGCC Tech Limited.";
const OG_IMAGE = "/images/og-image.png"; // 1200x630

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "DGCC Tech",
    "DGCC Tech Limited",
    "web design",
    "website development",
    "IT support",
    "computer repair",
    "cyber security",
    "branding",
    "graphic design",
    "printing services",
    "tech training",
    "ICT academy",
    "Ogun State",
    "Nigeria",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // verification: {
  //   google: "your-google-search-console-token",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff", // TODO: match your brand color
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: `${SITE_URL}${OG_IMAGE}`,
      description: SITE_DESCRIPTION,
      slogan: SITE_TAGLINE,
      telephone: "+2347045371328",
      email: "support@dgcctechsolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3, Akinguroye Street, Toluwalase Estate, ASB Bus Stop",
        addressLocality: "Oke Aro",
        addressRegion: "Ogun State",
        addressCountry: "NG",
      },
      hasMap: "https://maps.app.goo.gl/WWMtxSqxRn7ZhQj88",
      areaServed: [
        { "@type": "Country", name: "Nigeria" },
        { "@type": "Place", name: "Worldwide (remote IT support)" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+2347045371328",
        email: "support@dgcctechsolutions.com",
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "DGCC Tech services",
        itemListElement: [
          "Website Design and Development",
          "Cyber Security",
          "Computer Engineering and IT Support",
          "Branding and Graphic Design",
          "General Printing",
          "Tech Training",
          "Desktop and Laptop Sales",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
      // sameAs: [
      //   "https://www.facebook.com/...",
      //   "https://www.instagram.com/...",
      //   "https://www.linkedin.com/company/...",
      // ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-NG",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <AosInitializer />
        <SiteHeader />
        {children}
        <SiteFooter />
        <TawkToWidget />
      </body>
    </html>
  );
}
