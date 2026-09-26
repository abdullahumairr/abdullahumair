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
  title: "Abdullah Umair — Portfolio",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, and scalable web architecture.",
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
