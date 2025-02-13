const Boast = () => {
  return (
    <section className="py-20 lg:py-10">
      <div className="wrapper flex justify-between gap-8">
        <div className="first block lg:hidden h-auto basis-1/2">
          <img
            className="h-[50vw] min-h-full object-cover"
            src="/images/man-holding-solar-panel.webp"
            alt=""
          />
        </div>
        <div className="second basis-1/2 lg:basis-full flex flex-col gap-10 justify-between">
          <div className="first flex flex-col lg:gap-[1rem] gap-[3rem]">
            <h4 className="font-semibold sm:text-xl text-3xl">
              The best Energy Recruitment & Oilfield Services
            </h4>
            <h5 className="text-gray-800 text-lg">
              {" "}
              We provide end-to-end oilfield services, from equipment
              maintenance to operational support, ensuring efficiency, safety,
              and industry compliance.
            </h5>
          </div>

          <img
            className="h-[400px] hidden lg:block object-cover"
            src="/images/man-holding-solar-panel.webp"
            alt=""
          />

          <h5 className="text-gray-700">
            The energy industry is evolving, and so are we. Our recruitment and
            oilfield service solutions empower companies to adapt, grow, and
            lead in an ever-changing landscape. Let’s build the future of energy
            together.
          </h5>
        </div>
      </div>
    </section>
  );
};
export default Boast;
