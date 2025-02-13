import { statsData } from "..";

const Stats = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(254.04deg, #1B1B1B 8.97%, #1A1A1A 120.16%)",
      }}
      className="relative pt-[3vw] pb-[14vw]"
    >
      <img
        className="absolute bottom-0 w-full h-full top-0"
        src="/images/vector.webp"
        alt=""
      />
      <div className="wrapper">
        <h4 className="text-white mb-[2vw] sm:mb-8  md:text-[5vw] sm:!text-[5vw]  text-[4vw]">
          {" "}
          <span className="text-gray-800">Deloy</span> Construction Statistics
        </h4>

        <StatWrapper data={statsData} />
      </div>
    </section>
  );
};
export default Stats;

const Stat: React.FC<{ count: number | string; text: string }> = ({
  count,
  text,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-[5vw] md:text-[6vw] sm:!text-[8vw] text-white">
        {count}+
      </h4>
      <p className="text-[2vw] md:text-[3vw] sm:!text-[3.2vw] text-gray-600">
        {text}
      </p>
    </div>
  );
};

const StatWrapper: React.FC<{
  data: { count: number | string; text: string }[];
}> = ({ data }) => {
  return (
    <div className="flex justify-center lg:grid lg:max-w-[480px] sm:!max-w-[320px] mx-auto lg:gap-3 lg:grid-cols-2 gap-[5vw]">
      {data.map((item, index) => {
        return <Stat key={index} {...item} />;
      })}
    </div>
  );
};
