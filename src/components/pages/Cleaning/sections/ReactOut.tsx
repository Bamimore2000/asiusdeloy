import Button from "@/components/ui/Button/Button";

const ReactOut = () => {
  return (
    <section className="py-10">
      <div className="wrapper relative grid place-items-center">
        <img
          className="w-full max-h-[600px] relative z-[-5]"
          src="/images/woman.webp"
          alt=""
        />
        <div className="content  absolute z-[10] inset-0  place-items-center">
          <div className="content"></div>
          <h5 className="font-semibold mb-[5vw] text-center mt-[min(20%,10rem)] leading-[min(5vw,4.2rem)] relative z-[14] text-white text-[min(4vw,3.5rem)]">
            Over 200 leading organizations <br /> choose Deloy Cleaning Service
          </h5>

          <Button
            text="Reach out"
            className="bg-white block mx-auto relative text-[min(2vw,2rem)]  z-[14] text-black rounded-[3vw] px-[min(3.5vw,2rem)] py-[min(1.5vw,1rem)]"
          />

          <img
            src="/images/section-ellipse.webp"
            alt=""
            className="elli absolute bottom-0 w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default ReactOut;
