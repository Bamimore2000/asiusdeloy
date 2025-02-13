"use client";
import { CarouselData } from "..";
import { IoPlay } from "react-icons/io5";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

const WorksFromIndustries = () => {
  return (
    <section>
      <div className="wrapper">
        <h2 className="font-semibold text-gray-950 mb-5 text-center sm:text-3xl text-4xl">
          Works From Various Industries
        </h2>
        <p className="text-center text-gray-800 mb-8">
          Delivering high-quality commercial construction with efficiency,
          innovation, and sustainability at the core.
        </p>
      </div>

      <CarouselSection />
    </section>
  );
};
export default WorksFromIndustries;

const CarouselSection = () => {
  const options: EmblaOptionsType = { loop: true, align: "center" };
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  return (
    <div ref={emblaRef} className="items overflow-hidden">
      <div className="parent flex">
        {CarouselData.map((item, index) => {
          return (
            <div key={index} className="item pr-5 shrink-0">
              <CarouselItem {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CarouselItem: React.FC<{
  image: string;
  title: string;
  text: string;
}> = ({ image, title, text }) => {
  return (
    <div className="w-[600px] sm:w-[300px]">
      <div className="image overflow-hidden  mb-10 sm:mb-8 rounded-lg w-full">
        <img src={image} alt="" />
      </div>

      <div className="texts mx-auto flex flex-col items-center text-center max-w-[280px]">
        <h5 className="text-xl text-gray-900 font-semibold">{title}</h5>
        <p className="text-gray-800">{text}</p>
        <Link
          className="text-primary-600  mx-auto flex gap-2 items-center font-semibold mt-4"
          href="/"
        >
          Get Started <IoPlay color="#005DD6" />
        </Link>
      </div>
    </div>
  );
};
