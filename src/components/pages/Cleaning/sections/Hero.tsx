import Button from "@/components/ui/Button/Button";
import { RiPhoneFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="flex max-w mx-auto gap-10  min-h-screen ">
      <div className="items flex lg:flex-col-reverse gap-10 h-auto">
        <div className="first relative h-full basis-[40%]">
          <div
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(186, 186, 186, 0) 100%)",
            }}
            className="h-[30vh] lg:hidden absolute top-0 w-full"
          ></div>
          <img
            className="object-cover object-center sm:!h-[350px] lg:h-[500px] h-full"
            src="/images/bg-image-cleaning.webp"
            alt=""
          />
        </div>

        <div className="second wrapper pt-[30vh] lg:pt-[14vh]  basis-[60%]">
          <h1 className="font-semibold sm:!text-3xl md:text-4xl sm:mb-4 text-gray-900 text-5xl mb-8">
            Professional Cleaning <br /> Solutions Tailored <br /> to Your Needs
          </h1>
          <h2 className="text-lg text-gray-800 mb-12 sm:mb-8 max-w-[520px]">
            We specialize in a wide range of cleaning services tailored to meet
            the specific needs of your property, business, or construction site.
          </h2>
          <Button
            href="/contact"
            className="mb-8 block text-center w-max sm:mb-4 lg:w-full lg:rounded-full bg-secondary-700"
            primary
            text="Book a service"
          />
          <div className="just flex gap-2 text-lg sm:mt-4  text-gray-800 items-center">
            {" "}
            <RiPhoneFill className="text-lg" />
            Just one call away
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
