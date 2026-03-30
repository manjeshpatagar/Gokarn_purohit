import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Gokarna Pandit | Kannada Purohit Services in Uttara Kannada",
  description:
    "Book experienced Kannada purohit for Griha Pravesh, Satyanarayana Pooja, Marriage, Shraddha and all rituals in Uttara Kannada including Karwar, Kumta, Sirsi, Bhatkal and nearby areas.",
  keywords: [
    "Purohit in Uttara Kannada",
    "Kannada Purohit near me",
    "Gokarna Pandit",
    "Purohit in Bhatkal",
    "Purohit in Sirsi",
    "Griha Pravesh Pooja Karnataka",
    "Satyanarayana Pooja Uttara Kannada",
    "Hindu priest Karnataka",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gokarna Pandit | Kannada Purohit Services",
    description: "Professional purohit services across Uttara Kannada",
    url: "https://yourdomain.com",
    siteName: "Gokarna Pandit",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="kn">
      <body>
        <LanguageProvider>
          <TopBar />
          <Navbar />
          <main className="overflow-x-hidden pb-24 md:pb-0">{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
