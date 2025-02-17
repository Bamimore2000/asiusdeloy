import { contactLink, legalLink, socials } from "@/constants/navLink";
import Link from "next/link";
import { quickLinks } from "@/constants/navLink";

const Footer = () => {
  return (
    <footer className="bg-gray-200 overflow-hidden py-14">
      <div className="wrapper">
        <img src="/images/logo.webp" alt="" className="logo w-[300px]" />
        <div className="items flex lg:flex-col lg:gap-8 gap-[10%] ">
          <div className="first">
            <p className="text-gray-700 pt-2 pl-4">
              Construction, IT Service, Engineering, Cleaning Services
            </p>

            <div className="logo-wrapper flex pl-4 mt-4 gap-5">
              {socials.map((item, index) => {
                return (
                  <IconWrapper key={index} icon={item.icon} link={item.url} />
                );
              })}
            </div>
          </div>

          <div className="second flex-1">
            {/* first */}
            <div className="three border-b border-b-gray-500 pb-10 max-w-[640px] sm:!gap-0 sm:!justify-between lg:justify-start lg:gap-[25%] justify-between gap-4 flex">
              <LinksWrapper title="Quick Links" data={quickLinks} />
              <LinksWrapper
                external={true}
                title="Contact Us"
                data={contactLink}
              />
              <LinksWrapper
                className="lg:hidden"
                title="Legal"
                data={legalLink}
              />
            </div>

            {/* second */}
            <div className="second flex lg:flex-row-reverse lg:justify-end pt-7 gap-5">
              <div className="item">
                <LinkHeader className="text-gray-800" name="Work Hours" />
                <p className="sm:text-sm">Monday – Friday: 9:00 AM – 5:00 PM</p>
              </div>
              <div className="item sm:text-sm">
                <div className="first">
                  <LinkHeader className="text-gray-800" name="Address" />
                  <address>124 City Road, London, EC1V 2NX, UK</address>
                </div>

                <div className="flex items-center gap-2">
                  <address>1 kendale Grove Nottingham NG3 3BA, UK</address>
                  <span className="bg-white text-black p-1 px-2 rounded-3xl">
                    Branch
                  </span>
                </div>
              </div>
            </div>

            <LinksWrapper
              className="hidden mt-8 lg:block"
              title="Legal"
              data={legalLink}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const LinkItem: React.FC<{ url: string; name: string; external?: boolean }> = ({
  url,
  name,
  external,
}) => {
  return (
    <li>
      <Link
        className="text-gray-900 whitespace-nowrap sm:mb-2 sm:text-sm block mb-4"
        target={external ? "_blank" : ""}
        href={url}
      >
        {name}
      </Link>
    </li>
  );
};

const LinkHeader: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  return (
    <h4
      className={`text-xl sm:text-lg sm:mb-1 mb-4 text-gray-700 whitespace-nowrap ${className}`}
    >
      {name}
    </h4>
  );
};

const IconWrapper: React.FC<{ icon: React.ReactNode; link: string }> = ({
  icon,
  link,
}) => {
  return (
    <Link
      href={link}
      className="size-[2.5rem] bg-[#E9E9E9] rounded-full grid place-items-center"
    >
      <div className="icon w-[60%] aspect-square">{icon}</div>
    </Link>
  );
};

const LinksWrapper: React.FC<{
  title: string;
  data: { name: string; url: string }[];
  external?: boolean;
  className?: string;
}> = ({ title, data, external, className }) => {
  return (
    <div className={`${className}`}>
      <LinkHeader name={title} />
      <ul>
        {data.map((item, index) => {
          return (
            <LinkItem
              external={external}
              key={index}
              url={item.url}
              name={item.name}
            />
          );
        })}
      </ul>
    </div>
  );
};
