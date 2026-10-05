import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/loader";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter    = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://salaarproperties.com"),
  title: {
    default: "Salaar Properties | Premium Real Estate Lahore",
    template: "%s | Salaar Properties",
  },
  description:
    "Discover Lahore's most prestigious real estate developments. From DHA luxury villas to Gulberg high-rise apartments - Salaar Properties curates the finest addresses.",
  keywords: [
    "real estate Lahore",
    "luxury property Lahore",
    "DHA properties",
    "Gulberg apartments",
    "off-plan investment Pakistan",
    "Salaar Properties",
  ],
  openGraph: {
    type:        "website",
    locale:      "en_PK",
    url:         "https://salaarproperties.com",
    siteName:    "Salaar Properties",
    title:       "Salaar Properties | Premium Real Estate Lahore",
    description: "Lahore's most prestigious real estate developments â€” curated by Salaar Properties.",
    images: [{ url: "/hero_background.jpg", width: 1200, height: 630, alt: "Salaar Properties" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Loader />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
