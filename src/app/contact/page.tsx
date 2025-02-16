export const metadata = {
  title: "Contact Us | Get in Touch with Asiusdeloy Ltd",
  description:
    "Need professional services? Contact Asiusdeloy Ltd today for expert cleaning, construction, IT support, and engineering consultancy. We are here to help!",
  keywords: [
    "contact Asiusdeloy Ltd",
    "get in touch",
    "customer support",
    "cleaning services",
    "construction services",
    "IT support",
    "engineering consultancy",
  ],
  authors: [{ name: "Asiusdeloy Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Contact Us | Get in Touch with Asiusdeloy Ltd",
    description:
      "Need expert services? Contact Asiusdeloy Ltd today for cleaning, construction, IT support, and engineering consultancy solutions.",
    url: "https://www.asiusdeloyltd.co.uk/contact",
    type: "website",
    images: [
      {
        url: "https://www.asiusdeloyltd.co.uk/assets/contact-us.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Asiusdeloy Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get in Touch with Asiusdeloy Ltd",
    description:
      "Need expert services? Contact Asiusdeloy Ltd today for cleaning, construction, IT support, and engineering consultancy solutions.",
    images: ["https://www.asiusdeloyltd.co.uk/assets/contact-us.jpg"],
  },
};

import Contact from "@/components/pages/Contact/Contact";

export default function ContactPage() {
  return <Contact />;
}
