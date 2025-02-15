import Head from "next/head";
import Contact from "@/components/pages/Contact/Contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Get in Touch with Asiusdeloy Ltd</title>
        <meta
          name="description"
          content="Need professional services? Contact Asiusdeloy Ltd today for expert cleaning, construction, IT support, and engineering consultancy. We are here to help!"
        />
        <meta
          name="keywords"
          content="contact Asiusdeloy Ltd, get in touch, customer support, cleaning services, construction services, IT support, engineering consultancy"
        />
        <meta name="author" content="Asiusdeloy Ltd" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Contact Us | Get in Touch with Asiusdeloy Ltd"
        />
        <meta
          property="og:description"
          content="Need expert services? Contact Asiusdeloy Ltd today for cleaning, construction, IT support, and engineering consultancy solutions."
        />
        <meta
          property="og:url"
          content="https://www.asiusdeloyltd.co.uk/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.asiusdeloyltd.co.uk/assets/contact-us.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Get in Touch with Asiusdeloy Ltd"
        />
        <meta
          name="twitter:description"
          content="Need expert services? Contact Asiusdeloy Ltd today for cleaning, construction, IT support, and engineering consultancy solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.asiusdeloyltd.co.uk/assets/contact-us.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.asiusdeloyltd.co.uk/contact" />
      </Head>
      <Contact />
    </>
  );
};

export default ContactPage;
