"use client";
import Button from "@/components/ui/Button/Button";
import { useWindowSize } from "@/components/hooks/useWindowSize";
import { useState } from "react";
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "/images/construction-hero-image.webp",
    "/images/people-in-site.webp",
  ];
  const windowSize = useWindowSize();
  const isMobile = (windowSize?.width as number) < 767;
  return (
    <section className={`min-h-screen pb-10  overflow-hidden w-full`}>
      <div
        className={`flex  ${
          !isMobile && "wrapper"
        }  lg:flex-col lg:gap-10  overflow-hidden w-full`}
      >
        <div
          className={`first lg:text-white h-full relative lg:w-full w-[45%]`}
        >
          <div
            className={`content flex flex-col gap-8 relative ${
              isMobile && "wrapper"
            }  z-[20] lg:pt-[15vh] pt-[20vh]`}
          >
            <h1 className="font-bold text-gray-950 text-5xl sm:text-4xl uppercase">
              Energy <br /> Recruitment & <br /> Oilfield Services
            </h1>
            <p className="text-gray-700 leading-7 sm:leading-6 max-w-[640px]">
              Meet clients you’re excited to work with and take your career or
              business to new heights.
            </p>
            <Button
              href="/contact"
              primary
              className="bg-secondary-700 text-center lg:w-full lg:rounded-full text-white  w-max"
              text="Reach out"
            />
          </div>
        </div>

        <div
          style={{}}
          className="second h-[calc(100%-2.5rem)] bg-cover lg:h-[400px] lg:w-full w-[45%] absolute bottom-10 lg:relative top-0 right-0"
        >
          <img
            className="absolute object-cover top-0 bottom-0 size-full"
            src={images[current]}
            alt=""
          />
        </div>
      </div>
      <div className="shores lg:relative absolute bottom-0 wrapper cursor-pointer flex justify-end gap-4 py-4">
        <div
          onClick={() => {
            setCurrent(0);
          }}
          className={`${current === 0 ? "text-black" : "text-gray-700"}`}
        >
          On Shore
        </div>
        <div
          onClick={() => {
            setCurrent(1);
          }}
          className={`${current === 1 ? "text-black" : "text-gray-700"}`}
        >
          Off Shore
        </div>
      </div>
    </section>
  );
};
export default Hero;
