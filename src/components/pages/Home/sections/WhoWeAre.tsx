"use client";
import Button from "@/components/ui/Button/Button";
import { whoWeAreData } from "..";
import { useWindowSize } from "@/components/hooks/useWindowSize";

const WhoWeAre = () => {
  const windowSize = useWindowSize();
  const isMobile = (windowSize?.width as number) < 767;
  return (
    <section className=" text-lg xl:text-base py-10">
      <h4 className="text-primary-700 text-base wrapper mb-5">Who We Are</h4>
      <div
        className={`flex ${
          !isMobile ? "wrapper" : ""
        }   lg:flex-col lg:!gap-10 xl:gap-[5%] gap-[10%]`}
      >
        <First />
        <Second />
      </div>
    </section>
  );
};
export default WhoWeAre;

const First = () => {
  const windowSize = useWindowSize();
  const isMobile = (windowSize?.width as number) < 767;
  return (
    <div
      className={`basis-1/2 ${isMobile && "wrapper"}  text-gray-800 leading-7`}
    >
      <h3
        className={`text-5xl md:text-4xl mb-8  font-semibold leading-[3.6rem] text-gray-950`}
      >
        Innovating Across Industries, Building a Better Tomorrow
      </h3>
      <p>
        Asiusdeloy Ltd is a multi-service company dedicated to providing
        reliable and high-quality solutions across cleaning, engineering, IT,
        and construction. Our mission is to create safer, cleaner, and more
        efficient spaces for businesses and individuals through our professional
        expertise and commitment to excellence.
      </p>
      <p className="mb-8">
        We take pride in our ability to cater to various industries, including
        corporate offices, educational institutions, construction firms, real
        estate agencies, hospitality businesses, and industrial sectors. Our
        team consists of experienced professionals who are passionate about
        delivering tailored solutions that align with the specific needs of our
        clients.
      </p>
      <div className="values">
        <h5 className="text-xl font-semibold text-gray-900">Our Values</h5>
        <p>
          At Asiusdeloy Ltd, we prioritize sustainability and efficiency,
          implementing environmentally friendly cleaning solutions, responsible
          waste disposal methods, and cutting-edge engineering and IT strategies
          to enhance productivity.
        </p>
        <Button className="mt-14" primary={true} text="Read more" />
      </div>
    </div>
  );
};

const Second = () => {
  return (
    <div className="bg-primary-500 basis-1/2 text-white py-6 rounded-md">
      <div className="items wrapper">
        <h4 className="text-4xl md:text-3xl md:mb-3 mb-5">
          Innovating Across Industries, Building a Better Tomorrow
        </h4>
        <div className="items">
          {whoWeAreData.map((item, index) => {
            return (
              <ItemCard
                key={index}
                digit={item.number}
                text={item.text}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ItemCard: React.FC<{ digit: number; text: string; index: number }> = ({
  digit,
  text,
  index,
}) => {
  return (
    <div
      className={`flex py-8 flex-col ${
        index !== 3 && "border-b border-b-[#D6D6D6]"
      } gap-2`}
    >
      <h5 className="text-4xl font-semibold text-[#D2EE1C]">{digit}+</h5>
      <p className="">{text}</p>
    </div>
  );
};
