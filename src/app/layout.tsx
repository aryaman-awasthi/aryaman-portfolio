import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { profile, siteUrl, skillGroups } from "@/lib/data";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteTitle = "Aryaman Awasthi — Full-Stack Developer & Applied AI";
const siteDescription =
  "Aryaman Awasthi is a full-stack developer in Mumbai, India, building AI-powered systems at TCS — Java & Spring Boot, Angular & React, plus RAG, vector embeddings, and multi-agent workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Aryaman Awasthi",
  },
  description: siteDescription,
  keywords: [
    "Aryaman Awasthi",
    "Aryaman",
    "Awasthi",
    "Aryaman Awasthi portfolio",
    "Aryaman Awasthi developer",
    "Aryaman Awasthi full-stack developer",
    "Aryaman Awasthi TCS",
    "Aryaman Awasthi VIT",
    "full-stack developer",
    "applied AI engineer",
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "RAG",
    "LangChain",
    "Mumbai developer",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Aryaman",
    lastName: "Awasthi",
    username: "aryaman-awasthi",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Aryaman Awasthi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: ["Aryaman", "Aryaman Awasthi"],
      givenName: "Aryaman",
      familyName: "Awasthi",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      jobTitle: profile.role,
      description: siteDescription,
      email: `mailto:${profile.email}`,
      worksFor: {
        "@type": "Organization",
        name: "Tata Consultancy Services",
        url: "https://www.tcs.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Vellore Institute of Technology",
        url: "https://vit.ac.in",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "IN",
      },
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: skillGroups.flatMap((group) => group.items),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Aryaman Awasthi",
      description: siteDescription,
      publisher: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-bg font-mono text-sm leading-[1.6] text-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
