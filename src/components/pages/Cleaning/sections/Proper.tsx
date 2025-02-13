import { statsItems } from "..";

const Proper = () => {
  return (
    <section className="py-20 md:py-10 md:pt-5">
      <div className="wrapper flex gap-5 lg:flex-col lg:gap-10 justify-between">
        <h3 className="text-lg text-gray-700 max-w-[400px]">
          <span className="text-primary-600 font-semibold">Proper waste </span>
          disposal is crucial for maintaining a clean and sustainable
          environment. We offer efficient waste management services, including:
        </h3>

        <div className="stats flex max-w-[300px] flex-col gap-8">
          {statsItems.map((item, index) => {
            return <StatsCard {...item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Proper;

const StatsCard: React.FC<{
  figure: string;
  header: string;
  text: string;
}> = ({ figure, header, text }) => {
  return (
    <div>
      <h3 className="text-5xl lg:text-4xl sm:text-3xl mb-3 font-semibold text-primary-700">
        {figure}
      </h3>
      <h4 className="uppercase pb-1 border-b border-b-gray-400 text-gray-700">
        {header}
      </h4>
      <p className="text-gray-900">{text}</p>
    </div>
  );
};
