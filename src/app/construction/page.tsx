import Head from "next/head";
import Construction from "@/components/pages/Construction/Construction";

const ConstructionPage = () => {
  return (
    <>
      <Head>
        <title>Expert Construction Services | Asiusdeloy Ltd</title>
        <meta
          name="description"
          content="Asiusdeloy Ltd provides top-tier construction services, including project management, residential and commercial building, and infrastructure development. We deliver quality, sustainability, and efficiency."
        />
        <meta
          name="keywords"
          content="construction services, building contractors, residential construction, commercial construction, infrastructure development, project management, Asiusdeloy Ltd"
        />
        <meta name="author" content="Asiusdeloy Ltd" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Expert Construction Services | Asiusdeloy Ltd"
        />
        <meta
          property="og:description"
          content="Reliable and efficient construction solutions for homes, offices, and infrastructure projects. Partner with Asiusdeloy Ltd for quality and sustainability."
        />
        <meta
          property="og:url"
          content="https://www.asiusdeloyltd.co.uk/construction"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.asiusdeloyltd.co.uk/assets/construction-services.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Expert Construction Services | Asiusdeloy Ltd"
        />
        <meta
          name="twitter:description"
          content="Reliable and efficient construction solutions for homes, offices, and infrastructure projects. Partner with Asiusdeloy Ltd for quality and sustainability."
        />
        <meta
          name="twitter:image"
          content="https://www.asiusdeloyltd.co.uk/assets/construction-services.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.asiusdeloyltd.co.uk/construction"
        />
      </Head>
      <Construction />
    </>
  );
};

export default ConstructionPage;
