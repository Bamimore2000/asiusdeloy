export const metadata = {
  title: "Advanced Engineering & Energy Solutions | Asiusdeloy Ltd",
  description:
    "Asiusdeloy Ltd specializes in cutting-edge engineering solutions for the oil and gas sector, including drilling optimization, pipeline integrity management, and advanced energy technologies. Experience precision-driven engineering with us.",
  keywords: [
    "oil and gas engineering",
    "energy infrastructure",
    "drilling technology",
    "pipeline integrity",
    "offshore engineering",
    "petroleum services",
    "energy solutions",
    "Asiusdeloy Ltd",
  ],
  authors: [{ name: "Asiusdeloy Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Advanced Engineering & Energy Solutions | Asiusdeloy Ltd",
    description:
      "Pioneering engineering solutions for oil and gas, including drilling efficiency, pipeline maintenance, and sustainable energy advancements. Partner with Asiusdeloy Ltd for innovation-driven energy solutions.",
    url: "https://www.asiusdeloyltd.co.uk/engineering",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloyltd.co.uk/assets/engineering-innovation.jpg",
        width: 1200,
        height: 630,
        alt: "Engineering Solutions by Asiusdeloy Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Engineering & Energy Solutions | Asiusdeloy Ltd",
    description:
      "Engineering-driven oil and gas solutions: drilling technology, pipeline management, and sustainable energy innovation.",
    images: [
      "https://www.asiusdeloyltd.co.uk/assets/engineering-innovation.jpg",
    ],
  },
};

import OilServices from "@/components/pages/OilServices/OilServices";

export default function OilServicesPage() {
  return <OilServices />;
}
