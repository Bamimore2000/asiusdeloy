export const metadata = {
  title: "Reliable Oil and Gas Services | Asiusdeloy Ltd",
  description:
    "Asiusdeloy Ltd offers top-quality oil and gas services, including drilling support, pipeline maintenance, and energy solutions. Partner with us for efficient and sustainable energy solutions.",
  keywords: [
    "oil services",
    "gas services",
    "oil and gas industry",
    "energy solutions",
    "drilling support",
    "pipeline maintenance",
    "petroleum services",
    "Asiusdeloy Ltd",
  ],
  authors: [{ name: "Asiusdeloy Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Reliable Oil and Gas Services | Asiusdeloy Ltd",
    description:
      "Leading oil and gas service provider specializing in drilling support, pipeline maintenance, and sustainable energy solutions. Trust Asiusdeloy Ltd for top-tier energy services.",
    url: "https://www.asiusdeloyltd.co.uk/oil-services",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloyltd.co.uk/assets/oil-services.jpg",
        width: 1200,
        height: 630,
        alt: "Oil and Gas Services by Asiusdeloy Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Oil and Gas Services | Asiusdeloy Ltd",
    description:
      "Leading oil and gas service provider specializing in drilling support, pipeline maintenance, and sustainable energy solutions.",
    images: ["https://www.asiusdeloyltd.co.uk/assets/oil-services.jpg"],
  },
};

import OilServices from "@/components/pages/OilServices/OilServices";

export default function OilServicesPage() {
  return <OilServices />;
}
