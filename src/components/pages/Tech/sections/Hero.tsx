"use client";
import Button from "@/components/ui/Button/Button";

const Hero = () => {
  return (
    <section
      style={{
        marginTop: 80,
      }}
      className={`w-full border-[#BEBEBE] border-t`}
    >
      <div className="wrapper border-x border-[#BEBEBE] lg:border-none flex flex-col lg:items-start items-center gap-7 sm:py-[5rem] lg:py-[8rem] py-[14rem]">
        <h1 className="text-5xl sm:text-2xl lg:leading-10 lg:max-w-[500px] sm:font-normal whitespace-nowrap lg:lowercase lg:whitespace-normal lg:text-left  xl:text-[2.7rem] relative text-pretty text-center font-semibold">
          PREMIUM TECH SERVICES <br /> FOR YOUR BUSINESS & STARTUPS <Tag />
        </h1>
        <p className="text-gray-700">
          We create tech products users love and investors can’t resist
        </p>
        <Button
          primary
          className="bg-gray-950 mt-8 sm:mt-4 w-max text-white"
          text="Reach out via email"
        />
      </div>
    </section>
  );
};
export default Hero;

const Tag = () => {
  return (
    <span className="bg-primary-600 absolute font-normal transform rotate-[15deg]  w-max lg:origin-top-right origin-top-left -bottom-[40%] left-0 text-white px-4 p-2 text-base lg:!text-sm rounded-3xl lg:right-[5%] lg:top-[40%] h-max lg:left-auto lg:-rotate-[20deg]">
      Fast in execution
    </span>
  );
};
