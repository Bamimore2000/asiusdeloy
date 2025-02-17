"use client";
import Button from "@/components/ui/Button/Button";
import { items } from "..";
import { useWindowSize } from "@/components/hooks/useWindowSize";

const Trusted = () => {
  const windowSize = useWindowSize();
  const isMobile = (windowSize?.width as number) < 767;
  return (
    <section className="py-10 overflow-hidden">
      <div className="">
        <div className="first wrapper flex gap-1 lg:gap-8 flex-col">
          <h3 className="font-semibold md:text-3xl sm:!text-2xl text-4xl">
            Your Trusted Partner for Skilled <br /> Oilfeild Workforce Solutions{" "}
          </h3>
          <div className="second flex lg:justify-start justify-end">
            <Button
              href="/contact"
              primary
              className="bg-black text-white"
              text="View all expertise"
            />
          </div>
        </div>

        <div className="jobs wrapper mt-8">
          <h4 className="mb-3">Available Jobs</h4>
          <div className="b h-[1px] bg-gray-600 w-[200vw]"></div>
          <img
            className="h-6 w-full  block mt-8"
            src="/images/illustration.webp"
            alt=""
          />
        </div>

        <div
          className={`listings ${
            isMobile ? "" : "wrapper"
          }  lg:flex-col justify-between gap-10 flex mt-8`}
        >
          <div className="first ">
            <h4 className="text-3xl wrapper md:text-2xl sm:!text-xl font-semibold">
              Drilling & Completion Operations
            </h4>
            <img
              className={`w-[450px] lg:w-full lg:rounded-none max-h-[200px] ${
                isMobile ? "" : "wrapper"
              } object-cover object-top rounded-xl mt-6`}
              src="/images/drilling.webp"
              alt=""
            />
          </div>

          <div
            className={`second lg:self-auto ${
              isMobile && "wrapper"
            } flex self-end w-[500px] flex-col gap-8`}
          >
            {items.map((item, index) => {
              return <List key={index} text={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Trusted;

const List: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex justify-between items-start lg:!gap-0 gap-[4vw]">
      <span className="text">{text}</span>
      <Button
        href="/contact"
        text="Request for services"
        className="bg-secondary-500 whitespace-nowrap rounded-lg px-3 py-1 text-white"
      />
    </div>
  );
};
