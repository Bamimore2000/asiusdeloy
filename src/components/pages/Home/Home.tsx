import Hero from "./sections/Hero";
import Inverted from "./sections/Inverted";
import Services from "./sections/Services";
import WhoWeAre from "./sections/WhoWeAre";
import WhyChoose from "./sections/WhyChoose";
import Works from "./sections/Works";
import Faq from "./sections/Faq";
import StayUpdated from "./sections/StayUpdated";

const Home = () => {
  return (
    <main>
      <Hero />
      <Works />
      <WhoWeAre />
      <Services />
      <Inverted />
      <WhyChoose />
      <Faq />
      <StayUpdated />
    </main>
  );
};
export default Home;
