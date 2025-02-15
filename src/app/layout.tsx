import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asiusdeloy Ltd - Reliable Cleaning, Engineering & IT Services",
  description:
    "Asiusdeloy Ltd offers expert cleaning, engineering consultancy, IT support, and construction services. We provide reliable, sustainable, and customer-focused solutions for businesses and individuals.",
  keywords: [
    "Asiusdeloy Ltd",
    "cleaning services",
    "construction cleaning",
    "office cleaning",
    "residential cleaning",
    "engineering consultancy",
    "IT support",
    "construction services",
    "sustainable solutions",
    "professional services",
  ],
  openGraph: {
    title: "Asiusdeloy Ltd - Reliable Cleaning, Engineering & IT Services",
    description:
      "Providing top-tier cleaning, engineering consultancy, IT support, and construction services tailored to your needs.",
    url: "https://www.asiusdeloyltd.co.uk",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloyltd.co.uk/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Asiusdeloy Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asiusdeloy Ltd - Reliable Cleaning, Engineering & IT Services",
    description:
      "Providing top-tier cleaning, engineering consultancy, IT support, and construction services tailored to your needs.",
    images: ["https://www.asiusdeloyltd.co.uk/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
