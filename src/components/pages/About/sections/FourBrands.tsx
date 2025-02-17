import Button from "@/components/ui/Button/Button";
import { dataCard } from "..";
const FourBrands = () => {
  return (
    <section>
      <div className="first py-20 border-t border-t-[#D9D9D9] lg:flex-col lg:gap-4 lg:items-start flex items-center justify-between wrapper">
        <h3 className="text-6xl lg:text-5xl sm:!text-4xl font-semibold text-gray-950">
          4 major <br /> brands{" "}
        </h3>
        <p className="max-w-[400px] text-gray-800">
          Deloy has always been a fully remote company. Today, our small but
          mighty team is distributed across Nigeria and UK. What unites us is
          relentless focus.
        </p>
      </div>
      <CardsParent data={dataCard} />
    </section>
  );
};
export default FourBrands;

const CardsParent: React.FC<{
  data: {
    header: string;
    image: string;
    text: string;
    link: string;
  }[];
}> = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => {
        return <CardImage index={index + 1} {...item} key={index} />;
      })}
    </div>
  );
};

const CardImage: React.FC<{
  index: number;
  header: string;
  image: string;
  text: string;
  link: string;
}> = ({ header, image, text, link }) => {
  return (
    <div className="flex lg:flex-col lg:gap-8 items-center gap-10">
      <div className="image h-auto lg:max-w-[800px] w-full lg:basis-full basis-[40%] max-w-[600px]">
        <img className="w-full object-cover h-[400px]" src={image} alt="" />
      </div>
      <div className="second wrapper lg:wrapper py-8 max-w-[600px] basis-[60%]">
        {" "}
        <h3 className="font-semibold text-2xl mb-4">{header}</h3>
        <p className="text-lg w-[80%] xl:!w-[90%] sm:!w-full text-gray-800 mb-4">
          {text}
        </p>
        <Button
          href={link}
          primary
          className="bg-secondary-700 text-white"
          text="View service"
        />
      </div>
    </div>
  );
};
