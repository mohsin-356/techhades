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
import AlienCursorIsland from "@/components/ui/AlienCursorIsland";
import { LiquidGlassFilter } from "@/components/ui/LiquidGlass";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { headers } from "next/headers";

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

export async function generateMetadata(): Promise<Metadata> {
  const envBase = process.env.NEXT_PUBLIC_SITE_URL;
  let baseUrl = new URL("https://example.com");

  if (envBase) {
    baseUrl = new URL(envBase);
  } else {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    const proto = h.get("x-forwarded-proto") ?? "https";
    if (host) baseUrl = new URL(`${proto}://${host}`);
  }

  const title = "AlienMatrix – engineer intelligence beyond the human matrix";
  const description =
    "We build futuristic websites, apps, AI agents, automations, and smart dashboards for elite brands.";

  return {
    title: {
      default: title,
      template: "%s | AlienMatrix",
    },
    description,
    keywords: [
      "AlienMatrix",
      "Web Development",
      "App Development",
      "UI/UX",
      "AI Automation",
      "Software Development",
    ],
    icons: {
      icon: "/components/AlienMatrix_Exact.svg",
    },
    metadataBase: baseUrl,
    openGraph: {
      title,
      description:
        "Modern, animated, and high-performance digital products: Web, Mobile, AI, Automation, and more.",
      url: baseUrl,
      siteName: "AlienMatrix",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

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
          <SmoothScrollProvider>
            <LiquidGlassFilter />
            <CinematicAliens />
            <Navbar />
            <PageTransition>
              <main className="min-h-dvh pt-20 relative z-10">{children}</main>
            </PageTransition>
            <Footer />
            <Toaster />
            <AlienGuide />
            <AlienCursorIsland />
          </SmoothScrollProvider>
        </GlobalLoaderClient>
      </body>
    </html>
  );
}
