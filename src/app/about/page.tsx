import Head from "next/head";
import About from "@/components/pages/About/About";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>
          About Us - Asiusdeloy Ltd | Experts in Cleaning, IT & Engineering
        </title>
        <meta
          name="description"
          content="Learn more about Asiusdeloy Ltd, a trusted provider of cleaning, engineering consultancy, IT support, and construction services. We deliver sustainable and customer-focused solutions for businesses and individuals."
        />
        <meta
          name="keywords"
          content="About Asiusdeloy Ltd, cleaning services, engineering consultancy, IT support, construction services, professional solutions"
        />
        <meta name="author" content="Asiusdeloy Ltd" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="About Us - Asiusdeloy Ltd | Experts in Cleaning, IT & Engineering"
        />
        <meta
          property="og:description"
          content="Discover Asiusdeloy Ltd, your go-to partner for professional cleaning, engineering, IT support, and construction services."
        />
        <meta
          property="og:url"
          content="https://www.asiusdeloyltd.co.uk/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.asiusdeloyltd.co.uk/assets/about-us-banner.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Asiusdeloy Ltd | Experts in Cleaning, IT & Engineering"
        />
        <meta
          name="twitter:description"
          content="Discover Asiusdeloy Ltd, your go-to partner for professional cleaning, engineering, IT support, and construction services."
        />
        <meta
          name="twitter:image"
          content="https://www.asiusdeloyltd.co.uk/assets/about-us-banner.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.asiusdeloyltd.co.uk/about" />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
