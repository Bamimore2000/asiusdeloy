import Home from "@/components/pages/Home/Home";

export const metadata = {
  title: "Asiusdeloy Ltd | Expert Cleaning, Construction & IT Solutions",
  description:
    "Asiusdeloy Ltd provides top-tier cleaning, construction, and technology services. We deliver sustainable, reliable, and customer-centric solutions tailored to your needs.",
  keywords: [
    "cleaning services",
    "construction",
    "IT solutions",
    "engineering consultancy",
    "Asiusdeloy Ltd",
    "facility management",
  ],
  authors: [{ name: "Asiusdeloy Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Asiusdeloy Ltd | Expert Cleaning, Construction & IT Solutions",
    description:
      "Asiusdeloy Ltd provides expert cleaning, construction, and IT solutions tailored to your needs.",
    url: "https://www.asiusdeloy.co.uk",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloy.co.uk/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asiusdeloy Ltd Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asiusdeloy Ltd | Expert Cleaning, Construction & IT Solutions",
    description:
      "Expert cleaning, construction, and IT solutions for businesses and individuals.",
    images: ["https://www.asiusdeloy.co.uk/cover-image.jpg"],
  },
  alternates: {
    canonical: "https://www.asiusdeloy.co.uk",
  },
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
