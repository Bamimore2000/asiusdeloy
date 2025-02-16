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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Asiusdeloy Ltd",
    url: "https://www.asiusdeloyltd.co.uk",
    logo: "https://www.asiusdeloyltd.co.uk/logo.png",
    description:
      "Providing expert cleaning, construction, and IT solutions tailored to your needs.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44 123 456 789",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.facebook.com/Asiusdeloy",
      "https://www.twitter.com/Asiusdeloy",
      "https://www.linkedin.com/company/Asiusdeloy",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
