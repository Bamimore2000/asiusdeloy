"use client";
import Button from "@/components/ui/Button/Button";
import { useWindowSize } from "@/components/hooks/useWindowSize";
const Hero = () => {
  const windowSize = useWindowSize();
  const isMobile = (windowSize?.width as number) < 767;
  return (
    <section
      className={`flex  ${
        !isMobile && "wrapper"
      }  h-screen overflow-hidden hero-max w-full`}
    >
      <div className={`first lg:text-white   relative lg:w-full w-[45%]`}>
        <div
          className="bg-[#28282833]/20 
        hidden lg:block absolute  top-0 right-0 w-full h-full "
        >
          <img
            className=" z-[-30] absolute  top-0 right-0 w-full h-full object-cover"
            src="/images/construction-hero-image.webp"
            alt=""
          />
        </div>

        <div
          className={`content flex flex-col gap-8 relative ${
            isMobile && "wrapper"
          }  z-[20] pt-[20vh]`}
        >
          <h1 className="font-bold text-5xl sm:text-4xl uppercase">
            Build Smarter, <br /> Stronger, Better
          </h1>
          <p className="text-gray-700 lg:text-white leading-7 sm:leading-6 max-w-[640px]">
            Welcome to Asiusdeloy, your trusted partner in commercial
            construction. We deliver innovative, cost-effective, and sustainable
            building solutions that empower businesses to grow.
          </p>
          <Button
            href="/contact"
            primary
            className="bg-secondary-700 lg:rounded-full lg:!bg-[#F8F8F8] lg:text-[#2E2E2E] w-max  text-white"
            text="Book a service"
          />
        </div>
      </div>

      <div
        style={{
          background: "url(/images/construction-hero-image.webp)",
          backgroundSize: "cover",
        }}
        className="second h-full hero-max  lg:hidden w-[45%] absolute top-0 right-0"
      ></div>
    </section>
  );
};
export default Hero;
