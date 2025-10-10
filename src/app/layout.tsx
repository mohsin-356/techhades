import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TechHades – Intelligent Digital Experiences",
    template: "%s | TechHades",
  },
  description:
    "We build futuristic websites, apps, AI agents, automations, and smart dashboards for elite brands.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "TechHades – Intelligent Digital Experiences",
    description:
      "Modern, animated, and high-performance digital products: Web, Mobile, AI, Automation, and more.",
    url: "https://example.com",
    siteName: "TechHades",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-gradient-to-b from-[#05060f] via-[#090a18] to-[#0a0b1c] text-white overflow-x-hidden`}
      >
        <Navbar />
        <PageTransition>
          <main className="min-h-dvh pt-20">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
