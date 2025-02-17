"use client";
import { TabsContainer } from "../../Home/sections/Works";
import { constructionData, ConstructionDataType } from "..";
import { IoPlay } from "react-icons/io5";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
const Works = () => {
  return (
    <section className="py-20">
      <FirstSection />
    </section>
  );
};
export default Works;

const FirstSection = () => {
  return (
    <div>
      <div className="items wrapper">
        <h3 className="text-4xl lg:text-3xl mb-4 text-gray-950 font-semibold">
          We are Into
        </h3>

        <div className="justify-between lg:flex-col lg:items-start items-end lg:gap-4 flex">
          <h5 className="text-gray-800 max-w-[420px]">
            Welcome to AsiusdeloyLTD, your trusted partner in commercial
            construction. We specialize in delivering innovative,
            cost-effective, and sustainable building solutions.
          </h5>
          <Button
            href="/about"
            className="w-max h-max"
            primary={true}
            text="View all expertise"
          />
        </div>
      </div>

      <CarouselSection />
    </div>
  );
};

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const names = constructionData.map((item) => item.header);
  return (
    <div className="w-full mt-10">
      <TabsContainer
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        data={names}
      />
      <CardParent data={constructionData[currentIndex]} />
    </div>
  );
};

export const CardItem: React.FC<{
  index: number;
  title: string;
  text: string;
  image: string;
  variant?: boolean;
}> = ({ index, title, text, image, variant }) => {
  return (
    <article>
      {!variant && <span className="text-lg block mb-5">[{index + 1}]</span>}

      {!variant && (
        <>
          <h4 className="text-gray-950 xl:text-xl text-2xl mb-3 overflow-hidden text-ellipsis min-h-[3.4rem] sm:min-h-0 sm:max-h-[4rem] max-h-[3rem] leading-[1.5rem]">
            {title}
          </h4>
          <p className="text-gray-700">{text}</p>
        </>
      )}

      <div className="image-wrapper mt-6 relative w-full aspect-square overflow-hidden rounded-xl">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      {variant && (
        <>
          <h4 className="text-gray-950 mt-6 xl:text-xl text-2xl mb-3 overflow-hidden text-ellipsis leading-[1.5rem]">
            {title}
          </h4>
          <p className="text-gray-700">{text}</p>
        </>
      )}
      <Link
        className="text-primary-600 flex gap-2 items-center font-semibold mt-4"
        href="/contact"
      >
        Get Started <IoPlay color="#005DD6" />
      </Link>
    </article>
  );
};

const CardParent: React.FC<{ data: ConstructionDataType }> = ({ data }) => {
  return (
    <div className="items wrapper grid lg:grid-cols-2 sm:!grid-cols-1 grid-cols-3 gap-10">
      {data.data.map((item, index) => {
        return <CardItem index={index} {...item} key={index} />;
      })}
    </div>
  );
};
