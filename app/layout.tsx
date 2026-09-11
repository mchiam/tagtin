import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { pageTitle, site } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pageTitle(),
    template: "%s | Tagtin",
  },
  description:
    "Tagtin is the AI-driven fractional marketing partner for retail, ecommerce, and brands that need senior strategy and content — without a 10-person department.",
  applicationName: "Tagtin",
  authors: [{ name: "Tagtin Pte Ltd" }],
  keywords: [
    "fractional marketing",
    "AI marketing agency",
    "Singapore",
    "retail marketing",
    "ecommerce content",
    "Tagtin Studio",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: pageTitle(),
    description:
      "Story-led. AI-driven. Human always. Fractional marketing for retail and brands.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tagtin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle(),
    description: site.taglines.philosophy,
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/brand/mark.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#183050",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-SG"
      className={`${plusJakarta.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-charcoal">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
