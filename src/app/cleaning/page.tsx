import Head from "next/head";
import Cleaning from "@/components/pages/Cleaning/Cleaning";

const CleaningPage = () => {
  return (
    <>
      <Head>
        <title>Professional Cleaning Services | Asiusdeloy Ltd</title>
        <meta
          name="description"
          content="Asiusdeloy Ltd offers top-quality cleaning services for construction sites, offices, and residential spaces. We ensure cleanliness, hygiene, and customer satisfaction with our expert solutions."
        />
        <meta
          name="keywords"
          content="cleaning services, office cleaning, residential cleaning, construction site cleaning, deep cleaning, janitorial services, Asiusdeloy Ltd"
        />
        <meta name="author" content="Asiusdeloy Ltd" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Professional Cleaning Services | Asiusdeloy Ltd"
        />
        <meta
          property="og:description"
          content="Reliable cleaning services for businesses and homes. From deep cleaning to routine maintenance, Asiusdeloy Ltd ensures a spotless environment."
        />
        <meta
          property="og:url"
          content="https://www.asiusdeloyltd.co.uk/cleaning"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.asiusdeloyltd.co.uk/assets/cleaning-services.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Professional Cleaning Services | Asiusdeloy Ltd"
        />
        <meta
          name="twitter:description"
          content="Reliable cleaning services for businesses and homes. From deep cleaning to routine maintenance, Asiusdeloy Ltd ensures a spotless environment."
        />
        <meta
          name="twitter:image"
          content="https://www.asiusdeloyltd.co.uk/assets/cleaning-services.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.asiusdeloyltd.co.uk/cleaning" />
      </Head>
      <Cleaning />
    </>
  );
};

export default CleaningPage;
