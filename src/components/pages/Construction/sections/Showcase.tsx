const Showcase = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="item relative bg-primary-500">
        <h4 className="py-[17vw] sm:hidden relative z-[20] whitespace-nowrap lg:py-[20vw] text-white lg:text-[6vw] text-[5vw] wrapper">
          We are Into the best construction <br /> services{" "}
        </h4>

        <div className="item hidden sm:pb-20 sm:block">
          <div className="content wrapper pt-12 text-4xl text-white">
            <h4>
              <span className="block">We are Into the</span>
              <span className="block whitespace-nowrap text-right">
                best construction
              </span>
              <span className="block whitespace-nowrap text-right">
                services
              </span>
            </h4>
            <img
              className=" object-cover mt-8 sm:block hidden right-[-5%] relative h-[28rem] w-[100vw]"
              src="/images/layout.webp"
              alt=""
            />
          </div>
        </div>

        <img
          className="absolute object-cover sm:hidden right-[5%]  bottom-0 h-[calc(100%-13vw)] top-[13vw] w-[71%]"
          src="/images/layout.webp"
          alt=""
        />
      </div>
    </section>
  );
};
export default Showcase;
