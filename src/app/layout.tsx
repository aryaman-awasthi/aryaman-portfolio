import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { profile } from "@/lib/data";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.name,
  description:
    "Full-stack developer building AI-powered systems - Java & Spring Boot, Angular & React, and RAG, embeddings, and multi-agent workflows.",
  openGraph: {
    title: profile.name,
    description:
      "Full-stack developer building AI-powered systems - Java & Spring Boot, Angular & React, and RAG, embeddings, and multi-agent workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg font-sans text-ink antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
