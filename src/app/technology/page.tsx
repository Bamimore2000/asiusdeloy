import Head from "next/head";
import Tech from "@/components/pages/Tech/Tech";

const TechPage = () => {
  return (
    <>
      <Head>
        <title>Innovative Tech & Web Solutions | Asiusdeloy Ltd</title>
        <meta
          name="description"
          content="Asiusdeloy Ltd provides cutting-edge tech and web solutions, including IT support, web development, cybersecurity, and cloud services. Let’s transform your digital presence!"
        />
        <meta
          name="keywords"
          content="tech solutions, web development, IT support, cloud computing, cybersecurity, software development, digital transformation, Asiusdeloy Ltd"
        />
        <meta name="author" content="Asiusdeloy Ltd" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Innovative Tech & Web Solutions | Asiusdeloy Ltd"
        />
        <meta
          property="og:description"
          content="Get expert IT support, web development, cloud computing, and cybersecurity services from Asiusdeloy Ltd. Elevate your business with top-tier digital solutions!"
        />
        <meta
          property="og:url"
          content="https://www.asiusdeloyltd.co.uk/tech"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.asiusdeloyltd.co.uk/assets/tech-solutions.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Innovative Tech & Web Solutions | Asiusdeloy Ltd"
        />
        <meta
          name="twitter:description"
          content="Get expert IT support, web development, cloud computing, and cybersecurity services from Asiusdeloy Ltd."
        />
        <meta
          name="twitter:image"
          content="https://www.asiusdeloyltd.co.uk/assets/tech-solutions.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.asiusdeloyltd.co.uk/tech" />
      </Head>
      <Tech />
    </>
  );
};

export default TechPage;
