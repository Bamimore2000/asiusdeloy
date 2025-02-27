import Button from "@/components/ui/Button/Button";
import HeroCarouselSlider from "../reusables/HeroCarousel";

const Hero = () => {
  return (
    <section className="h-screen hero-max overflow-hidden max-h-screen w-full">
      <div className="wrapper w-full hero-max h-full text-white ">
        <div className="z-[20] mt-[20vh] sm:mt-[15rem] max-w-full relative">
          <h1 className="header border-b-2 pb-[3rem] sm:pb-0 mb-[3rem] sm:border-b-0 sm:mb-[1rem] border-b-white w-max leading-[4rem]  font-bold">
            Construction, Engineering, <br /> Technology & Creating <br /> Clean
            Spaces
          </h1>
          <p className="text-2xl sm:max-w-[300px] sm:text-xl sm:mb-[2rem] mb-[5rem]">
            Your One-Stop Solution for Quality Services Across Industries
          </p>
          <Button
            className="bg-white sm:text-xl sm:font-medium sm:px-6 sm:py-3 text-black px-8 py-4 rounded-lg text-2xl font-semibold"
            text="Book a service"
          />
        </div>
      </div>
      <HeroCarouselSlider />
    </section>
  );
};
export default Hero;
