import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
// @ts-ignore Next.js handles this global stylesheet import at build time.
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { LangProvider } from "@/lib/lang-context";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Umair | Fullstack Web Developer ",
  description:
    "Portofolio profesional Abdullah Umair, seorang Fullstack Web Developer berbasis di Semarang. Spesialis Next.js, TypeScript, Backend Terdistribusi, dan DevOps.",
  keywords: [
    "Abdullah Umair",
    "Web Full Stack Developer",
    "contoh Web Full Stack Developer",
    "full stack developer",
    "Umair",
    "abdlumrr",
    "Fullstack Developer Semarang",
    "Web Developer Semarang",
    "Next.js Specialist Indonesia",
    "Jasa Pembuatan Website Semarang",
    "Sekolah Developer Indonesia",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://abdullahumair.my.id",
  },
  openGraph: {
    title: "Abdullah Umair | Fullstack Web Developer",
    description:
      "Eksplorasi project web, arsitektur backend, dan tech-stack dari Abdullah Umair.",
    url: "https://abdullahumair.my.id",
    siteName: "Abdullah Umair Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://abdullahumair.my.id/images/hero/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Abdullah Umair Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Umair | Fullstack Web Developer",
    description:
      "Portofolio profesional Fullstack Web Developer berbasis di Semarang.",
    images: ["https://abdullahumair.my.id/images/hero/hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${GeistSans.variable}`}
    >
      <body className={`${GeistSans.className} font-sans antialiased`}>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
