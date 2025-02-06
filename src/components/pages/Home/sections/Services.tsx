"use client";
import Link from "next/link";
import { serviceData } from "..";
import { useWindowSize } from "@/components/hooks/useWindowSize";

const Services = () => {
  const windowSize = useWindowSize();
  const isMobile = (windowSize?.width as number) < 767;
  return (
    <section className="py-20 md:py-10">
      <div
        className={`services flex ${
          isMobile ? "" : "wrapper"
        } flex-col p-10 md:p-4 rounded-xl lg:rounded-none bg-secondary-500 text-white`}
      >
        <h4 className="text-3xl sm:text-2xl lg:mb-6 font-semibold">Services</h4>
        <Items />
      </div>
    </section>
  );
};
export default Services;

const Items = () => {
  return (
    <div className="w-[80%] lg:w-full  self-end">
      {serviceData.map((item, index) => {
        return <Item key={index} index={index} data={item} />;
      })}
    </div>
  );
};

export interface DataProps {
  heading: string;
  subHeading: string;
  link: string;
}

const Item: React.FC<{ data: DataProps; index: number }> = ({
  data: { heading, subHeading, link },
  index,
}) => {
  return (
    <div
      className={`flex py-8 ${index === 0 && "pt-5"} ${
        index !== 4 && "border-t border-t-white"
      } justify-between`}
    >
      <div className="first flex-1 gap-[15%]  flex">
        <div className="one flex-col min-w-[200px] w-[40%] flex">
          <h5 className="font-semibold lg:text-lg text-xl mb-4 max-w-[200px]">
            {heading}
          </h5>
          <p>{subHeading}</p>
        </div>
        <span className="font-semibold">0{index + 1}</span>
      </div>

      <Link className="underline font-semibold text-lg" href={link}>
        Visit
      </Link>
    </div>
  );
};
