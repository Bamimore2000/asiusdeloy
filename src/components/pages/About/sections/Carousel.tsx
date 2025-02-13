"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

const images = [
  "/images/slider-image-1.webp",
  "/images/slider-image-2.webp",
  "/images/slider-image-3.webp",
  "/images/slider-image-3.webp",
  "/images/slider-image-3.webp",
];

const Carousel = () => {
  return (
    <section className="pt-10">
      <CarouselSection />
    </section>
  );
};
export default Carousel;

const CarouselSection = () => {
  const options: EmblaOptionsType = { loop: true, align: "center" };
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  return (
    <div ref={emblaRef} className="items overflow-hidden">
      <div className="parent flex">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="item h-[400px] sm:w-full sm:h-[350px] relative w-[600px]  shrink-0"
            >
              <CarouselItem image={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CarouselItem: React.FC<{
  image: string;
}> = ({ image }) => {
  return (
    <img
      className="absolute object-cover top-0 bottom-0 right-0 size-full"
      src={image}
      alt=""
    />
  );
};
