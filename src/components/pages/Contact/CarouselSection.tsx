import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { PaginationVariant } from "../Home/reusables/HeroCarousel";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
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

export const CarouselSection = () => {
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
    <div className="pa relative h-full w-full">
      <div ref={emblaRef} className="items h-full w-full overflow-hidden">
        <div className="parent relative h-full w-full flex">
          {images.map((item, index) => {
            return (
              <div
                key={index}
                className="item h-full relative w-full  shrink-0"
              >
                <img
                  className="absolute object-cover top-0 bottom-0 right-0 size-full"
                  src={item}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination-wrapper left-1/2 -translate-x-1/2 top-1/2  absolute bottom-[2.5rem]">
        <PaginationVariant
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
        />
      </div>
    </div>
  );
};
