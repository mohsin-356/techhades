import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { GlobalLoaderClient } from "@/components/GlobalLoaderClient";
import { Toaster } from "@/components/ui/toaster";
import { CinematicAliens } from "@/components/ui/cinematic-aliens";
import { AlienGuide } from "@/components/ui/alien-guide";
import { LiquidGlassFilter } from "@/components/ui/LiquidGlass";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const godber = localFont({
  src: "../../public/components/godber-3lxoz.ttf",
  variable: "--font-display",
  weight: "100 900", // Allow variable weights if supported, or browser simulation
});

const patrickHand = Patrick_Hand({
  variable: "--font-handwriting",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AlienMatrix – Intelligent Digital Experiences",
    template: "%s | AlienMatrix",
  },
  description:
    "We build futuristic websites, apps, AI agents, automations, and smart dashboards for elite brands.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "AlienMatrix – Intelligent Digital Experiences",
    description:
      "Modern, animated, and high-performance digital products: Web, Mobile, AI, Automation, and more.",
    url: "https://example.com",
    siteName: "AlienMatrix",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('alienmatrix.theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${godber.variable} ${patrickHand.variable} antialiased bg-[#05060f] overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200`}
      >

        <GlobalLoaderClient>
          <LiquidGlassFilter />
          <CinematicAliens />
          <Navbar />
          <PageTransition>
            <main className="min-h-dvh pt-20 relative z-10">{children}</main>
          </PageTransition>
          <Footer />
          <Toaster />
          <AlienGuide />
        </GlobalLoaderClient>
      </body>
    </html>
  );
}
