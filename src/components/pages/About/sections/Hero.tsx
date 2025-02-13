const Hero = () => {
  return (
    <section className="mt-[80px] lg:pt-12  grid place-items-center relative lg:h-auto lg:pb-8 h-[calc(100vh-80px)]">
      <img
        className="absolute lg:hidden object-cover h-full w-full top-0 right-0"
        src="/images/hero-frame.webp"
        alt=""
      />
      <img
        className="absolute lg:block hidden object-cover h-full w-full top-0 right-0"
        src="/images/bg-image-frame.webp"
        alt=""
      />

      <div className="item wrapper z-[5] lg:flex lg:flex-col lg:gap-20 text-center text-[#F8F8F8]">
        <img
          className="hidden relative w-full h-[400px] xs:h-[250px] object-cover rounded-xl z-[5] lg:block"
          src="/images/bg-image-cleaning.webp"
          alt=""
        />
        <div className="itens">
          <span className="mb-5 ">Why Deloy LTD?</span>
          <h1 className="font-semibold lg:text-5xl md:!text-4xl text-6xl">
            Helping every size <br /> of business succeed{" "}
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Hero;
