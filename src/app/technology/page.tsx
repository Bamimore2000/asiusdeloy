export const metadata = {
  title: "Innovative Tech & Web Solutions | Asiusdeloy Ltd",
  description:
    "Asiusdeloy Ltd provides cutting-edge tech and web solutions, including IT support, web development, cybersecurity, and cloud services. Let’s transform your digital presence!",
  keywords: [
    "tech solutions",
    "web development",
    "IT support",
    "cloud computing",
    "cybersecurity",
    "software development",
    "digital transformation",
    "Asiusdeloy Ltd",
  ],
  authors: [{ name: "Asiusdeloy Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Innovative Tech & Web Solutions | Asiusdeloy Ltd",
    description:
      "Get expert IT support, web development, cloud computing, and cybersecurity services from Asiusdeloy Ltd. Elevate your business with top-tier digital solutions!",
    url: "https://www.asiusdeloyltd.co.uk/tech",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloyltd.co.uk/assets/tech-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Solutions by Asiusdeloy Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Tech & Web Solutions | Asiusdeloy Ltd",
    description:
      "Get expert IT support, web development, cloud computing, and cybersecurity services from Asiusdeloy Ltd.",
    images: ["https://www.asiusdeloyltd.co.uk/assets/tech-solutions.jpg"],
  },
};

import Tech from "@/components/pages/Tech/Tech";

export default function TechPage() {
  return <Tech />;
}
