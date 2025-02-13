import Button from "@/components/ui/Button/Button";
const ReactOut = () => {
  return (
    <section className="py-10">
      <div className="wrapper rounded-2xl overflow-hidden relative grid place-items-center">
        <img
          className="w-full object-cover  h-[40vw] xl:h-[50vw] md:!h-[350px] relative z-[-5]"
          src="/images/people-image.webp"
          alt=""
        />
        <div className="content  absolute z-[10] inset-0  place-items-center">
          <div className="content"></div>
          <h5 className="font-semibold mb-[5vw] md:text-2xl text-center mt-[min(20%,10rem)] md:mt-[9rem] leading-[min(5vw,4.2rem)] relative z-[14] text-white text-[min(4vw,3.5rem)]">
            Over 20+ leading organizations <br /> choose Deloy IT Service
          </h5>
          <Button
            text="Reach out"
            className="bg-white block mx-auto relative  text-[min(2vw,2rem)] h-max md:px-6 md:py-2 md:text-base md:rounded-3xl  z-[14] text-black rounded-[3vw] px-[min(3.5vw,2rem)] py-[min(1.5vw,1rem)]"
          />
          <img
            src="/images/bg-below.webp"
            alt=""
            className="elli absolute bottom-0 w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default ReactOut;
