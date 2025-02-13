const ImagesInverted = () => {
  return (
    <section>
      <div className="wrapper">
        <h4 className="text-gray-950 text-pretty font-semibold mb-14 sm:text-2xl lg:mb-6 text-3xl">
          Ultra-wide-angle camera. For the <br className="lg:hidden block" />{" "}
          small details. And the big picture.
        </h4>
        <ImageAlternative />

        <div className="items lg:hidden text-gray-950 flex gap-8">
          <ImageInverted
            text="Whether you are seeking to bolster your operations with reliable expertise or require short-term solutions, Asiusdeloy Ltd ensures your workforce is tailored to meet your operational goals."
            image="/images/image-flying-bird.webp"
          />
          <ImageInverted
            inverted
            image="/images/shelling.webp"
            text="We pride ourselves on connecting you with professionals who possess the technical skills, industry experience, and safety-focused mindset required to excel in the oilfield services industry."
          />
        </div>
      </div>
    </section>
  );
};
export default ImagesInverted;

const ImageInverted: React.FC<{
  inverted?: boolean;
  text: string;
  image: string;
}> = ({ inverted, text, image }) => {
  return (
    <div
      className={`flex gap-[20rem] ${
        inverted ? "flex-col-reverse" : "flex-col"
      }`}
    >
      <img className="object-cover h-[50vw]" src={image} alt="" />
      <h5>{text}</h5>
    </div>
  );
};

const ImageAlternative = () => {
  return (
    <div className="hidden text-gray-950 lg:block">
      <h5 className="mb-4">
        {" "}
        we provide end-to-end oilfield services, from equipment maintenance to
        operational support, ensuring efficiency, safety, and industry
        compliance.
      </h5>
      <img className="mb-4" src="/images/image-flying-bird.webp" alt="" />
      <h5 className="mb-4">
        {" "}
        Whether you are seeking to bolster your operations with reliable
        expertise or require short-term solutions, Asiusdeloy Ltd ensures your
        workforce is tailored to meet your operational goals.
      </h5>
      <img src="/images/shelling.webp" alt="" />
    </div>
  );
};
