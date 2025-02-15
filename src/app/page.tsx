import Head from "next/head";
import Home from "@/components/pages/Home/Home";

const page = () => {
  return (
    <>
      <Head>
        <title>
          Asiusdeloy Ltd | Expert Cleaning, Construction & IT Solutions
        </title>
        <meta
          name="description"
          content="Asiusdeloy Ltd provides expert cleaning, construction, and technology solutions for businesses and individuals. Reliable, sustainable, and customer-focused services."
        />
        <meta
          name="keywords"
          content="Asiusdeloy, cleaning services, construction, IT solutions, engineering consultancy"
        />
        <meta name="author" content="Asiusdeloy Ltd" />

        {/* Open Graph Meta for Social Sharing */}
        <meta
          property="og:title"
          content="Asiusdeloy Ltd | Your Trusted Service Provider"
        />
        <meta
          property="og:description"
          content="Providing expert cleaning, construction, and IT solutions tailored to your needs."
        />
        <meta
          property="og:image"
          content="https://www.asiusdeloy.co.uk/cover-image.jpg"
        />
        <meta property="og:url" content="https://www.asiusdeloy.co.uk" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asiusdeloy Ltd | Expert Services" />
        <meta
          name="twitter:description"
          content="Expert cleaning, construction, and IT solutions for businesses and individuals."
        />
        <meta
          name="twitter:image"
          content="https://www.asiusdeloy.co.uk/cover-image.jpg"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.asiusdeloy.co.uk" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Asiusdeloy Ltd",
              url: "https://www.asiusdeloy.co.uk",
              logo: "https://www.asiusdeloy.co.uk/logo.png",
              description:
                "Providing expert cleaning, construction, and IT solutions tailored to your needs.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44 123 456 789",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.facebook.com/Asiusdeloy",
                "https://www.twitter.com/Asiusdeloy",
                "https://www.linkedin.com/company/Asiusdeloy",
              ],
            }),
          }}
        />
      </Head>
      <Home />
    </>
  );
};

export default page;
