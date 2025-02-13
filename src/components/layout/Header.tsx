"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowDown } from "react-icons/io";

import { EmblaOptionsType } from "embla-carousel";
import React, { ComponentPropsWithRef, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};
export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
type PropType = ComponentPropsWithRef<"button">;
export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react"; // Icons
import Button from "../ui/Button/Button";
import { Drop, navLinks } from "@/constants/navLink";

const activePaths = ["/cleaning", "/services", "/construction"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled
          ? "bg-white shadow-md"
          : activePaths.includes(pathname)
          ? "bg-transparent"
          : "bg-white"
      }`}
    >
      <div className="wrapper flex justify-between items-center py-4 ">
        <div className="menu-logo flex gap-5 items-center">
          {/* Hamburger Menu Button */}
          <button
            className="hidden lg:flex flex-col gap-[6px] z-50"
            onClick={() => setMenuOpen(true)}
          >
            <div className="w-6 h-[3px] bg-black rounded"></div>
            <div className="w-6 h-[3px] bg-black rounded"></div>
          </button>

          {/* Logo */}
          <Link href="/">
            <Image
              className="!w-[150px]"
              src="/images/logo.webp"
              alt="Company Logo"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:hidden xl:gap-3 flex gap-6">
          <NavLinks data={navLinks} />
        </div>

        <Button
          primary={true}
          className="bg-secondary-700 whitespace-nowrap sm:text-base lg:bg-gray-50 lg:border border-gray-700 lg:text-black sm:!py-2 text-white"
          text="Book a service"
        />
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-[100] shadow-md transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button className="pl-2" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className={` px-4 flex gap-2 items-center py-2 text-lg rounded transition ${
                  pathname === item.url ? "text-gray-700" : "text-inherit"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
                {item.url === "/services" && <IoIosArrowDown size={20} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (click to close) */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};
export default Header;

const NavLinks: React.FC<{ data: { url: string; name: string }[] }> = ({
  data,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <ul className="flex xl:gap-0 gap-6">
      {data.map((item, index) => (
        <li
          onMouseEnter={() => {
            if (item.url === "/services") {
              setOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (item.url === "/services") {
              setOpen(false);
            }
          }}
          className="relative"
          key={index}
        >
          <Link
            href={item.url}
            className="hover:underline  flex items-center gap-2 relative whitespace-nowrap px-3 py-2 rounded-md"
          >
            {item.name}
            {item.url === "/services" && <IoIosArrowDown size={15} />}
          </Link>
          {open && item.url === "/services" && <DropDown />}
          {item.url === "/services" && (
            <div className="absolute  w-full  -bottom-4  h-4"></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export const DropDown = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
      className="flex absolute justify-between rounded-xl w-[600px]  -left-[220%] -bottom-[250px] items-center  bg-gray-200"
    >
      <div className="first relative p-8">
        <img
          src="/images/spanner.webp"
          alt=""
          className="absolute pointer-events-none left-0"
        />
        <h3 className="text-gray-700 text-xl mb-4">Asiudeloy services</h3>
        <div className="items flex flex-col gap-4">
          {Drop.map((item, index) => {
            return (
              <Link
                className="flex items-center gap-6"
                key={index}
                href={item.link}
              >
                <span className="w-5">{item.icon}</span>
                <span className="text-gray-900">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="second p-1  h-[250px] w-[260px]">
        <ImageSlider />
      </div>
    </div>
  );
};

const ImageSlider = () => {
  const images = [
    "/images/bg-image-cleaning.webp",
    "/images/construction-hero-image.webp",
    "/images/bg-image-cleaning.webp",
    "/images/bg-image-cleaning.webp",
  ];

  const options: EmblaOptionsType = { loop: true, align: "center" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);
  return (
    <div className="items h-full w-full">
      <div className="absolute bottom-8 right-[100px] flex gap-2 z-[4]">
        {scrollSnaps.map((item, index) => {
          return (
            <div
              key={index}
              className={`size-2 rounded-full ${
                selectedIndex === index ? "bg-[#D9D9D9]" : "bg-[#757575]"
              }`}
            ></div>
          );
        })}
      </div>
      <div
        ref={emblaRef}
        className="item rounded-2xl h-full w-full overflow-hidden size-[200px]"
      >
        <div className="images h-full w-full flex">
          {images.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                alt=""
                className="w-full object-cover h-full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
