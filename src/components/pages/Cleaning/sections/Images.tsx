import { imagesData } from "..";

const Images = () => {
  return (
    <section className="py-20">
      <div className="wrapper flex lg:gap-8 lg:flex-col xl:items-center gap-4">
        {imagesData.map((item, index) => {
          return <ImageBlur {...item} key={index} />;
        })}
      </div>
    </section>
  );
};
export default Images;

const ImageBlur: React.FC<{
  image: string;
  title: string;
  text: string;
  color: string;
}> = ({ image, title, text, color }) => {
  return (
    <div
      className="rounded-md overflow-hidden h-[450px] relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <img src={image} alt="" className="opacity-0" />
      <div
        style={{
          backgroundImage: `url(${color})`,
          backgroundSize: "cover",
        }}
        className="absolute bottom-0 flex items-end text-white p-10 xl:p-5 xl:text-base w-full h-[70%]"
      >
        <div className="items flex-col gap-10">
          <p className="mb-5">{text}</p>
          <p className="text-[##EBE9FF]">{title}</p>
        </div>
      </div>
    </div>
  );
};
