import { CardItem } from "../../Construction/sections/Works";
import { cleaningData } from "..";
const Services = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="wrapper">
        <div className="item max-w-[768px] mx-auto">
          <h3 className="text-secondary-750 text-center font-semibold lg:text-4xl mb-8 sm:!text-2xl text-5xl">
            We have different <br /> types of cleaning services
          </h3>
          <CardsWrapper />
        </div>
      </div>
    </section>
  );
};
export default Services;

export const CardsWrapper = () => {
  return (
    <div className="grid-cols-2 gap-10 md:grid-cols-1 grid">
      {cleaningData.map((item, index) => {
        return (
          <CardItem
            variant
            key={index}
            index={index}
            image={item.image}
            text={item.text}
            title={item.header}
          />
        );
      })}
    </div>
  );
};
