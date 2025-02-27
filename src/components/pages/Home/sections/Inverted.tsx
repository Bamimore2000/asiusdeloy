import { invertData } from "..";

const Inverted = () => {
  return (
    <section className="wrapper md:py-10 py-20">
      <div className="secions flex flex-col gap-14 sm:gap-10">
        {invertData.map((item, index) => {
          return <Component key={index} data={item} index={index} />;
        })}
      </div>
    </section>
  );
};
export default Inverted;

const Component: React.FC<{
  data: { header: string; text: string; image: string };
  index: number;
}> = ({ data: { header, text, image }, index }) => {
  const end = index % 2 === 0;
  return (
    <div
      className={`max-w-[640px] ${
        !end ? "self-end flex flex-col items-end" : "self-start"
      }`}
    >
      <h4
        className={`text-3xl ${
          !end && "text-right  flex justify-end"
        } sm:text-2xl sm:mb-3 font-semibold mb-5 max-w-[300px]`}
      >
        {header}
      </h4>
      <p className={`text-lg text-gray-750 mb-5 ${!end && "text-right"}`}>
        {text}
      </p>
      <img
        className="w-full h-[400px] object-cover rounded-xl"
        src={image}
        alt=""
      />
    </div>
  );
};
