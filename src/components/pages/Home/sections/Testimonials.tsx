const Testimonials = () => {
  return (
    <section className="py-24 sm:py-10 pb-[7rem]">
      <div className="wrapper">
        <div className="card rounded-md lg:flex-col  overflow-hidden items-end bg-secondary-50 flex">
          <div className="first h-auto lg:w-full basis-[40%]">
            <img
              className="max-h-[600px] lg:object-top xl:max-h-[900px] lg:!max-h-[400px] h-auto w-full object-cover"
              src="/images/person-image-standing.webp"
              alt=""
            />
          </div>

          <div className="second px-10 xl:pt-8 sm:px-4 xl:pb-10  pb-24 text-[#723B0E] basis-[60%]">
            <h3 className="font-semibold max-w-[600px]  xl:text-3xl  sm:!text-xl text-4xl">
              &ldquo;Asiusdeloy Ltd transformed our office space with their
              exceptional cleaning services. The team was professional,
              punctual, and ensured that every detail was handled with
              care&ldquo;
            </h3>
            <h4 className="text-secondary-500 font-semibold mt-10">
              — Jack Wicks, owner of Wicks Barbershop
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
