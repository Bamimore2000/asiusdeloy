import Hero from "./sections/Hero";
import KnowAboutUs from "./sections/KnowAboutUs";
import Showcase from "./sections/Showcase";
import Sidebar from "./sections/Sidebar";
import Stats from "./sections/Stats";
import Works from "./sections/Works";
// import WorksFromIndustries from "./sections/WorksFromIndustries";

const Construction = () => {
  return (
    <div>
      <Hero />
      <KnowAboutUs />
      <Works />
      {/* <WorksFromIndustries /> */}
      <Showcase />
      <Sidebar />
      <Stats />
    </div>
  );
};
export default Construction;
