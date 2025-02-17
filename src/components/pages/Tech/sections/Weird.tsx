import Link from "next/link";
import { Group } from "./Group";

const Weird = () => {
  return (
    <section className="py-20 lg:bg-gray-100">
      <div className="wrapper lg:px-0 p-10 rounded-xl bg-gray-100">
        <h4 className="text-2xl font-semibold mb-4 text-gray-900">
          Empowering Your Business with <br /> Innovative IT Solutions
        </h4>
        <p className="text-gray-700 mb-10">
          Transform your business with expert IT consulting services. We <br />{" "}
          analyze your current systems and
        </p>

        <CardFirst />
        <CardGroup />
        <Group />
      </div>
    </section>
  );
};
export default Weird;

const CardFirst = () => {
  return (
    <div className="first overflow-hidden lg:flex-col-reverse lg:gap-20 lg:bg-inherit lg:px-0 flex lg:items-start items-center gap-10 justify-between p-10 bg-white lg:py-[2rem] py-[7rem] rounded-xl">
      <div className="firts bg-inherit z-20 lg:z-40 basis-1/2">
        <h5 className="font-semibold uppercase mb-2 text-secondary-500">
          Network Setup & Consulting
        </h5>
        <p className="text-gray-700 mb-2">
          From initial setup to optimized configurations, we design and
          implement robust networks that keep your operations running smoothly.
        </p>
        <Link
          href="/contact"
          className="flex font-semibold items-center gap-3 text-[#0B0B0B]"
        >
          Get started{" "}
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.03688 12.522C1.37115 12.9456 0.5 12.4674 0.5 11.6783V1.32167C0.5 0.532583 1.37115 0.0543684 2.03688 0.478012L10.1742 5.65634C10.7917 6.04929 10.7917 6.95071 10.1742 7.34366L2.03688 12.522Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <ImageGroup />
    </div>
  );
};

const ImageShadow: React.FC<{ img: string; className: string }> = ({
  img,
  className,
}) => {
  return (
    <div className={` relative`}>
      <img
        className={`object-cover h-[15vw] lg:h-[200px] sm:!h-[160px] min-h-[150px] ${className} rounded-md h-auto`}
        src={img}
        alt=""
      />

      <img
        className={`!absolute object-cover rounded-md  w-full h-[100px] opacity-10`}
        src={img}
        alt=""
      />
      <div
        className="bg-gradient-to-b from-transparent  to-gray-100/100 z-30 h-[40%] w-full absolute  bottom-[-110px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0), var(--gray-100) 30%, white 100%)",
        }}
      ></div>
    </div>
  );
};

const ImageGroup = () => {
  return (
    <div className="flex basis-1/2 relative items-center  sm:max-w-[400px] max-w-[500px]">
      <ImageShadow className="" img="/images/right.webp" />
      <ImageShadow
        className="relative z-[5] transform !origin-center object-contain scale-x-[2.8] scale-y-[1.3]"
        img="/images/center.webp"
      />
      <ImageShadow className="" img="/images/left.webp" />
    </div>
  );
};

const CardGroup = () => {
  return (
    <div className="grid grid-cols-3 lg:flex lg:flex-col lg:items-center xl:grid-cols-2 mt-4 gap-5">
      <SoftwareDev />
      <Cyber />
      <Solutions />
    </div>
  );
};

export const Cyber = () => {
  return (
    <Card
      className=""
      text={["From initial setup to optimized configurations, we design "]}
      header="Cybersecurity"
    >
      <div className="relative">
        <img className="w-full" src="/images/round.webp" alt="" />
      </div>
    </Card>
  );
};

export const Ui = () => {
  return (
    <Card
      className="pt-4 pl-4"
      text={["From initial setup to optimized configurations, we design "]}
      header="UI/UX DESIGN"
    >
      <div
        style={{
          background: "linear-gradient(180deg, #F5F5F5 0%, #FDFDFD 100%)",
        }}
        className="relative bg-secondary-500"
      >
        <img className="w-full" src="/images/arrow.webp" alt="" />
      </div>
    </Card>
  );
};

const SoftwareDev = () => {
  return (
    <Card
      text={["From initial setup to optimized configurations, we design "]}
      header="Software Development"
    >
      <div className=" relative">
        <img className="w-full" src="/images/outside.webp" alt="" />
        <img
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1/2"
          src="/images/inside.webp"
          alt=""
        />
      </div>
    </Card>
  );
};

const Solutions = () => {
  return (
    <Card
      className="p-4"
      text={[
        "Quickly resolve technical issues to keep your business uninterrupted.",
        "Reduce costly downtime and maintain staff efficiency with prompts support",
      ]}
      header=" IT Troubleshooting"
    >
      <div className="first mb-5 relative">
        <img className="w-full" src="/images/last-filter.webp" alt="" />
      </div>
    </Card>
  );
};

const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  header: string;
  text: string[];
}> = ({ children, header, text, className }) => {
  return (
    <div
      className={`bg-white ${className} flex flex-col justify-between rounded-md max-w-[400px]`}
    >
      <div>{children}</div>
      <div className="second">
        <h4 className="text-center text-secondary-500 text-lg font-semibold">
          {header}
        </h4>
        <div className="flex gap-1 max-w-[300px] xl:max-w-full  p-4 text-center mx-auto flex-col">
          {text.map((item, text) => {
            return (
              <p className="text-gray-700 text-pretty" key={text}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
