export const metadata = {
  title: "Expert Construction Services | Asiusdeloy Ltd",
  description:
    "Asiusdeloy Ltd provides top-tier construction services, including project management, residential and commercial building, and infrastructure development. We deliver quality, sustainability, and efficiency.",
  keywords: [
    "construction services",
    "building contractors",
    "residential construction",
    "commercial construction",
    "infrastructure development",
    "project management",
    "Asiusdeloy Ltd",
  ],
  authors: [{ name: "Asiusdeloy Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Expert Construction Services | Asiusdeloy Ltd",
    description:
      "Reliable and efficient construction solutions for homes, offices, and infrastructure projects. Partner with Asiusdeloy Ltd for quality and sustainability.",
    url: "https://www.asiusdeloyltd.co.uk/construction",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloyltd.co.uk/assets/construction-services.jpg",
        width: 1200,
        height: 630,
        alt: "Expert Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Construction Services | Asiusdeloy Ltd",
    description:
      "Reliable and efficient construction solutions for homes, offices, and infrastructure projects. Partner with Asiusdeloy Ltd for quality and sustainability.",
    images: [
      "https://www.asiusdeloyltd.co.uk/assets/construction-services.jpg",
    ],
  },
};

import Construction from "@/components/pages/Construction/Construction";

export default function ConstructionPage() {
  return <Construction />;
}
