export const metadata = {
  title: "About Us - Asiusdeloy Ltd | Experts in Cleaning, IT & Engineering",
  description:
    "Learn more about Asiusdeloy Ltd, a trusted provider of cleaning, engineering consultancy, IT support, and construction services.",
  keywords: [
    "About Asiusdeloy Ltd",
    "cleaning services",
    "engineering consultancy",
    "IT support",
    "construction services",
    "professional solutions",
  ],
  authors: [{ name: "Asiusdeloy Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "About Us - Asiusdeloy Ltd | Experts in Cleaning, IT & Engineering",
    description:
      "Discover Asiusdeloy Ltd, your go-to partner for professional cleaning, engineering, IT support, and construction services.",
    url: "https://www.asiusdeloyltd.co.uk/about",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloyltd.co.uk/assets/about-us-banner.jpg",
        width: 1200,
        height: 630,
        alt: "About Us Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Asiusdeloy Ltd | Experts in Cleaning, IT & Engineering",
    description:
      "Discover Asiusdeloy Ltd, your go-to partner for professional cleaning, engineering, IT support, and construction services.",
    images: ["https://www.asiusdeloyltd.co.uk/assets/about-us-banner.jpg"],
  },
};

import About from "@/components/pages/About/About";

export default function AboutPage() {
  return <About />;
}
