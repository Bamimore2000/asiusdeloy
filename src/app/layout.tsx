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
  const organizationJsonLd = {
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.asiusdeloyltd.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.asiusdeloyltd.co.uk/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cleaning",
        item: "https://www.asiusdeloyltd.co.uk/cleaning",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Construction",
        item: "https://www.asiusdeloyltd.co.uk/construction",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://www.asiusdeloyltd.co.uk/contact",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Oil Services",
        item: "https://www.asiusdeloyltd.co.uk/oil-services",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Technology",
        item: "https://www.asiusdeloyltd.co.uk/technology",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
