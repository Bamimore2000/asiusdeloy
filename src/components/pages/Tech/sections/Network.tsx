const Network = () => {
  return (
    <section className="bg-gray-950 pl-[5%] lg:pl-0 lg:flex-col-reverse flex">
      <div className="first wrapper lg:flex lg:py-20 lg:justify-start grid place-items-center relative basis-[65%]">
        <img
          src="/images/side-eli.png"
          alt=""
          className="absolute w-[60%] lg:translate-x-1/2 lg:top-[-20%] lg:right-1/2  -right-[20%]"
        />
        <img
          src="/images/side-eli.png"
          alt=""
          className="absolute w-[60%]  lg:translate-x-1/2 lg:top-[-20%] lg:right-1/2  -right-[20%]"
        />
        <div className="items text-gray-50 max-w-[500px]">
          <h4 className="text-[max(4vw,2.25rem)] lg:text-4xl sm:!text-3xl leading-[3.8vw] mb-10 font-semibold">
            Network Setup & <br /> Consulting
          </h4>
          <p className="text-gray-500 lg:text-xl sm:!text-base text-[max(1.5vw,1.25rem)]">
            From initial setup to optimized configurations, we design and
            implement robust networks that keep your operations running
            smoothly.
          </p>
        </div>
      </div>

      <div className="second lg:basis-full   basis-[35%]">
        <img
          className="object-cover lg:w-full lg:max-h-[300px]"
          src="/images/image-cloud.webp"
          alt=""
        />
      </div>
    </section>
  );
};
export default Network;
