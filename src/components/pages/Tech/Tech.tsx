import Faq from "./sections/Faq";
import Hero from "./sections/Hero";
import Network from "./sections/Network";
import ReactOut from "./sections/ReachOut";
import Sidebar from "./sections/Sidebar";
import ThirdSection from "./sections/ThirdSection";
import Weird from "./sections/Weird";

const Tech = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Sidebar />
      <ThirdSection />
      <Weird />
      <Network />
      <ReactOut />
      <Faq />
    </div>
  );
};
export default Tech;
