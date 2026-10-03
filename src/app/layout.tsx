import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/loader";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Salaar Properties | Premium Real Estate",
  description: "Discover premium real estate projects and properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Loader />
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
