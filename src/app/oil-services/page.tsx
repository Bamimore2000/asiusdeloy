import Head from "next/head";
import OilServices from "@/components/pages/OilServices/OilServices";

const OilServicesPage = () => {
  return (
    <>
      <Head>
        <title>Reliable Oil and Gas Services | Asiusdeloy Ltd</title>
        <meta
          name="description"
          content="Asiusdeloy Ltd offers top-quality oil and gas services, including drilling support, pipeline maintenance, and energy solutions. Partner with us for efficient and sustainable energy solutions."
        />
        <meta
          name="keywords"
          content="oil services, gas services, oil and gas industry, energy solutions, drilling support, pipeline maintenance, petroleum services, Asiusdeloy Ltd"
        />
        <meta name="author" content="Asiusdeloy Ltd" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Reliable Oil and Gas Services | Asiusdeloy Ltd"
        />
        <meta
          property="og:description"
          content="Leading oil and gas service provider specializing in drilling support, pipeline maintenance, and sustainable energy solutions. Trust Asiusdeloy Ltd for top-tier energy services."
        />
        <meta
          property="og:url"
          content="https://www.asiusdeloyltd.co.uk/oil-services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.asiusdeloyltd.co.uk/assets/oil-services.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Reliable Oil and Gas Services | Asiusdeloy Ltd"
        />
        <meta
          name="twitter:description"
          content="Leading oil and gas service provider specializing in drilling support, pipeline maintenance, and sustainable energy solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.asiusdeloyltd.co.uk/assets/oil-services.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.asiusdeloyltd.co.uk/oil-services"
        />
      </Head>
      <OilServices />
    </>
  );
};

export default OilServicesPage;
