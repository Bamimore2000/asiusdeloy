import Button from "@/components/ui/Button/Button";
import { data } from "..";

const ThirdSection = () => {
  return (
    <section className="relative">
      <SideItem />
      <SideItem right />
      <div className="wrapper py-24 border-x lg:border-none border-[#BEBEBE]">
        <h2 className="lowercase text-center sm:text-3xl font-semibold text-4xl mb-12">
          hAVING A GREAT IDEA <br /> ISN’T ENOUGH ANYMORE
        </h2>

        <div className="items w-[94%] lg:w-full mx-auto lg:mx-0 lg:gap-8 grid lg:grid-cols-1 grid-cols-3">
          {data.map((item, index) => {
            return <Item key={index} index={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default ThirdSection;

const getItemStyles = (index: number) => {
  let styles =
    "flex justify-center relative !lg:border-none items-center  border-[0.91px] border-[#BEBEBE] p-8"; // Base styles

  if ([0, 3, 6].includes(index)) {
    styles += "!pl-0 !border-x-0 !lg:border-none !justify-start"; // No padding left
  }

  if ([2, 5].includes(index)) {
    styles += " !lg:border-none !border-x-0";
  }
  if ([1].includes(index)) {
    styles += " !lg:border-none !border-b-0";
  }

  if ([0, 1, 2, 6, 7].includes(index)) {
    styles += " !lg:border-none !border-t-0 !border-b-0"; // No padding left
  }

  if ([6, 7].includes(index)) {
    styles += " !lg:border-none !pb-0"; // No bottom padding
  }

  if ([1, 4, 7].includes(index)) {
    styles += "!lg:border-x-none !border-x"; // Border right and left
  }

  if ([1, 4].includes(index)) {
    styles += "!lg:border-none p-6"; // Box styles
  }

  return styles;
};

const Item: React.FC<{
  icon?: React.ReactNode;
  header?: string;
  text?: string;
  variant?: boolean;
  index: number;
}> = ({ icon, header, text, variant, index }) => {
  return (
    <div
      className={`${getItemStyles(
        index
      )} lg:!border-none lg:border-0 lg:!p-0 lg:justify-start`}
    >
      {[1, 4].includes(index) && (
        <>
          <Box right />
          <Box />
        </>
      )}
      {variant ? (
        <div className=" lg:mt-12 max-w-[600px]">
          <h4 className="text-xl sm:text-base sm:font-medium lg:text-gray-800  mb-4 font-semibold">
            Transform your business with expert IT consulting services.
          </h4>
          <Button
            href="/contact"
            className="bg-secondary-700 rounded-lg text-white p-2"
            text="Get started"
          />
        </div>
      ) : (
        <div className="text-left lg:flex lg:gap-5 lg:max-w-[600px] max-w-[320px]">
          <span className="mb-2 lg:mb-0 block">{icon}</span>
          <div className="items">
            <h4 className="font-semibold sm:font-medium mb-3 text-lg">
              {header}
            </h4>
            <p className="text-gray-600 text-sm">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Box: React.FC<{ right?: boolean }> = ({ right }) => {
  return (
    <div
      className={`size-2 lg:hidden border-[#232323] border-b bottom-0 absolute ${
        right ? "right-[-0.91px] border-r" : "left-[-0.91px] border-l"
      }`}
    ></div>
  );
};

const SideItem: React.FC<{ right?: boolean }> = ({ right }) => {
  return (
    <img
      src="/images/side-animation.webp"
      className={`absolute lg:hidden  bottom-0 h-[calc(100%+10rem)] w-[3vw] ${
        right ? "right-[0%]" : "left-[0%]"
      }`}
      alt=""
    />
  );
};
