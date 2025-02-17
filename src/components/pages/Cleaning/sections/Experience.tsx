const Experience = () => {
  return (
    <section className="py-14">
      <div className="wrapper flex lg:flex-col lg:gap-6  gap-[10%] justify-between">
        <div className="first flex flex-col gap-14 justify-between basis-1/2">
          <div className="top">
            <h5 className="text-4xl font-medium lg:text-3xl sm:!text-2xl mb-4 text-gray-900">
              Asiusdeloy Cleaning Service has swiftly built a reputation for
              excellence across diverse clients.
            </h5>
            <p className="text-gray-900">
              Maintaining a clean and sustainable environment. We offer
              efficient waste management services, including:
            </p>
          </div>

          <div className="bottom flex gap-5">
            <Card figure={20} text="Efficiency Improved" />
            <Card figure={100} text="Safety" />
          </div>
        </div>

        <div className="second    basis-1/2 relative">
          <div className="absolute  bg-white shadow-lg p-2 rounded-md flex items-center gap-3 bottom-[-5%] lg:right-0 right-[-5%]  text-blue-600">
            2024 was our year starting year{" "}
            <img className="size-10" src="/images/flower.webp" alt="" />
          </div>
          <img
            className="object-cover sm:h-[400px]  rounded-lg h-full"
            src="/images/hand-holding-sanitizer.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Experience;

const Card: React.FC<{ figure: number; text: string }> = ({ figure, text }) => {
  return (
    <div className="bg-gray-100 rounded-md p-5">
      <h6 className="text-black sm:text-4xl text-5xl mb-4">{figure}%</h6>
      <p className="text-gray-700 text-lg">{text}</p>
    </div>
  );
};
