const Experienced = () => {
  return (
    <section>
      <div className="wrapper">
        <Group
          variant
          header="Experienced Team"
          image="/images/man-holding-sanitizer.webp"
          text="Our team consists of highly trained professionals with extensive industry experience. We ensure that every project benefits from our collective expertise, allowing us to provide efficient, high-quality services. Our staff undergoes continuous training to stay updated with the latest industry standards, technological advancements, and best practices."
        />
        <div className="image-wrapper mb-5">
          <img
            className="w-full max-h-[600px] rounded-lg"
            src="/images/factory.webp"
            alt=""
          />
        </div>
        <Group
          className="pb-20"
          header="Reliability"
          image="/images/man-with-pc.webp"
          text="At Asiusdeloy Ltd, we understand that time is of the essence. That’s why we adhere strictly to project deadlines without compromising on quality. Our clients trust us for our consistency, dependability, and commitment to delivering services as promised. We maintain open communication throughout every project, ensuring that there are no surprises, only timely and successful project completions."
        />
      </div>
    </section>
  );
};
export default Experienced;

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-gray-900 font-semibold sm:mb-3 sm:text-2xl mb-10 text-4xl">
      {children}
    </h2>
  );
};

const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h4 className="text-gray-800 xl:text-lg text-xl">{children}</h4>;
};

const Group: React.FC<{
  header: string;
  text: string;
  image: string;
  className?: string;
  variant?: boolean;
}> = ({ header, text, image, variant, className }) => {
  return (
    <div
      className={`py-12  flex lg:gap-10 lg:flex-col-reverse justify-between mt-10  border-t border-t-[#D9D9D9] ${className}`}
    >
      <div className="right basis-1/2">
        <Header>{header}</Header>
        <Text>{text}</Text>
      </div>

      <div className="left flex justify-end basis-1/2">
        <img
          className={`max-h-[400px] lg:w-full rounded-md ${
            variant && "object-top"
          }  w-[80%] object-cover`}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};
