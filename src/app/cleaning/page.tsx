export const metadata = {
  title: "Professional Cleaning Services | Asiusdeloy Ltd",
  description:
    "Asiusdeloy Ltd offers expert cleaning services for construction sites, offices, and homes. We ensure cleanliness, hygiene, and customer satisfaction with our top-tier solutions.",
  keywords: [
    "cleaning services",
    "office cleaning",
    "residential cleaning",
    "construction site cleaning",
    "deep cleaning",
    "janitorial services",
    "Asiusdeloy Ltd",
  ],
  authors: [{ name: "Asiusdeloy Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Professional Cleaning Services | Asiusdeloy Ltd",
    description:
      "Reliable cleaning services for businesses and homes. From deep cleaning to routine maintenance, Asiusdeloy Ltd ensures a spotless environment.",
    url: "https://www.asiusdeloyltd.co.uk/cleaning",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloyltd.co.uk/assets/cleaning-services.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning Services | Asiusdeloy Ltd",
    description:
      "Reliable cleaning services for businesses and homes. From deep cleaning to routine maintenance, Asiusdeloy Ltd ensures a spotless environment.",
    images: ["https://www.asiusdeloyltd.co.uk/assets/cleaning-services.jpg"],
  },
};

import Cleaning from "@/components/pages/Cleaning/Cleaning";

export default function CleaningPage() {
  return <Cleaning />;
}
