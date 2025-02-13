import Button from "@/components/ui/Button/Button";

const Leading = () => {
  return (
    <section className="py-20 pt-24">
      <div className="wrapper justify-between lg:flex-col lg:gap-8 lg:pt-[2rem] lg:pr-[2rem] lg:pb-[9rem] lg:p:[2rem] flex gap-2 items-start xl:pl-[2rem] text-white p-[7rem] rounded-md relative bg-primary-500">
        <img
          className="absolute pointer-events-none inset-0 h-full w-full"
          src="/images/vector-bg.webp"
          alt=""
        />
        <div className="first z-[10] flex flex-col gap-8">
          <h4 className="text-4xl max-w-[400px] lg:max-w-full font-semibold">
            Over 50+ leading organizations choose Asiusdeloy
          </h4>
          <p>
            Our cleaning solutions ensure that your <br className="lg:hidden" />{" "}
            spaces are safe, hygienic, and ready for use{" "}
            <br className="lg:hidden" /> at all times.
          </p>

          <Button
            primary
            className="!text-[#161616] w-max bg-white"
            text="Reach out"
          />
        </div>
        <div className="second lg:w-full lg:pr-[8rem] flex flex-1 justify-center relative z-[10]">
          <div className="image lg:mx-auto relative ">
            <img
              className="w-[220px] lg:mx-auto rounded-2xl object-cover h-[250px]"
              src="/images/men-with-phone.webp"
              alt=""
            />
            <img
              className="w-[220px] absolute top-1/2 right-[-50%] rounded-2xl object-cover h-[250px]"
              src="/images/people-pick-dirt.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Leading;
