"use client";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { heroImages } from "../index";
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

export const HeroCarouselSlider: React.FC = () => {
  const options: EmblaOptionsType = { slidesToScroll: "auto", loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);
  return (
    <div className="absolute top-0 overflow-clip max-w-full left-0 w-full h-full">
      {/* overlay */}
      <div className="overlay h-full w-full absolute inset-0 z-[5] bg-[#9B501333]/20"></div>

      <div ref={emblaRef} className="parent h-full overflow-hidden">
        <div className="child flex h-full w-full">
          {heroImages.map((item, index) => {
            return (
              <div
                key={index}
                className="image-wrapper relative basis-full h-full min-w-0 shrink-0"
              >
                <img
                  className="absolute object-cover h-full w-full inset-0 "
                  src={item}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination-wrapper left-1/2 -translate-x-1/2 absolute bottom-[2.5rem]">
        <PaginationVariant
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
        />
      </div>
    </div>
  );
};

export default HeroCarouselSlider;

interface PaginationProps {
  scrollSnaps: number[]; // or more specific type depending on the structure of scrollSnaps
  selectedIndex: number;
  onDotButtonClick?: (index: number) => void; // Making this optional
}

export const PaginationVariant: React.FC<PaginationProps> = ({
  scrollSnaps,
  selectedIndex,
  onDotButtonClick,
}) => {
  return (
    <div className="pagination bg-[#959595]/70 rounded-full p-5 sm:p-3 flex gap-2 xlg:gap-1 transition-all">
      {scrollSnaps.map((_, index) => {
        return (
          <div
            onClick={() => {
              if (onDotButtonClick) {
                onDotButtonClick(index); // Only call if onClick is provided
              }
            }}
            key={index}
            className={`size-4 sm:size-[0.5rem] rounded-full transition-all ${
              index === selectedIndex ? " bg-[#D9D9D9]" : "bg-[#B8B8B8]"
            } `}
          ></div>
        );
      })}
    </div>
  );
};
