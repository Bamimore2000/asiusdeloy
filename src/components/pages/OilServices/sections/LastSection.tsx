import Button from "@/components/ui/Button/Button";

const LastSection = () => {
  return (
    <section className="py-20">
      <div className="wrapper relative py-[10rem] sm:py-[5rem] bg-blue-500 grid place-items-center">
        <img
          src="/images/vector-2.webp"
          alt=""
          className="absolute top-0 bottom-0 w-full h-full"
        />
        <div className="content"></div>
        <h5 className="font-semibold text-6xl text-pretty lg:text-5xl sm:!text-3xl w-[75%] text-center mb-14  relative z-[14] text-white">
          Your Trusted Partner for Skilled Oilfeild Workforce Solutions
        </h5>

        <Button
          text="Reach out"
          className="bg-white px-10 py-5 sm:!px-6 lg:px-8 lg:py-4 lg:text-xl sm:!py-3 rounded-[2.5rem] text-2xl block mx-auto relative  z-[14] text-black"
        />
      </div>
    </section>
  );
};
export default LastSection;
