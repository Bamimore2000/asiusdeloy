import { whyData } from "..";

const WhyChoose = () => {
  return (
    <section className="wrapper md:py-10 py-20">
      <h4 className="text-gray-700">Why Choose Asiusdeloy Ltd?</h4>
      <div className="flex mt-[3rem] sm:mt-[1rem] justify-end">
        <div className="items max-w-[768px]  grid gap-8 md:gap-10 md:grid-cols-1 grid-cols-2">
          {whyData.map((item, index) => {
            return <Item key={index} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;

const Item: React.FC<{ data: { header: string; text: string } }> = ({
  data: { header, text },
}) => {
  return (
    <div>
      <h5 className="mb-5 font-bold text-gray-950 text-xl">{header}</h5>
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  );
};
