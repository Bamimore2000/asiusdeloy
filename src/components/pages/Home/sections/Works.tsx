"use client";
import Button from "@/components/ui/Button/Button";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { CiPlay1 } from "react-icons/ci";
import Autoplay from "embla-carousel-autoplay";
import { CiPause1 } from "react-icons/ci";
import { useAutoplay } from "../reusables/EmblaCarouselAutoplay";
import { useAutoplayProgress } from "../reusables/useEmblaCarouselAutoplayProgress";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../reusables/useEmblaCarouselArrowButton";

import { sliderImages } from "..";
import {
  ReactNode,
  SetStateAction,
  Dispatch,
  useRef,
  useEffect,
  useState,
  useCallback,
  ComponentPropsWithRef,
  RefObject,
} from "react";

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

const Works = () => {
  return (
    <section className="overflow-hidden mb-10">
      <div>
        <FirstSection />
        <SecondSection />
      </div>
    </section>
  );
};
export default Works;

const FirstSection = () => {
  return (
    <div className="wrapper">
      <div className="max-w-[768px] sm:py-[4rem]  py-[8rem] mx-auto">
        <h4 className="text-gray-700 mb-4">*Know about us</h4>
        <h3 className="text-gray-950 text-xl">
          At Asiusdeloy Ltd, we are dedicated to providing high-quality services
          that meet the diverse needs of businesses and individuals. Whether you
          need expert cleaning solutions for construction sites, office spaces,
          or residential properties, or require professional engineering
          consultancy, IT support, and construction services, we have you
          covered. With a strong reputation for reliability, sustainability, and
          customer satisfaction, we are your go-to partner for all your service
          needs.
        </h3>
      </div>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div>
      <div className="first flex wrapper sm:flex-col sm:gap-4 sm:justify-start md:items-start justify-between mb-3 items-center">
        <h3 className="text-4xl sm:text-3xl text-gray-900 font-semibold">
          Our Work Speaks <br />
          <span className="text-gray-600">for Itself</span>
        </h3>
        <Button primary={true} text="More Enquiry" />
      </div>

      <h5 className="text-gray-700 wrapper max-w-[420px]">
        A Playbook with tools and rules designed to scale globally and flex
        locally.
      </h5>
      <CarouselParent />
    </div>
  );
};

const TabsHeader: React.FC<{
  index: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  children: ReactNode;
  tabRef: (el: HTMLDivElement | null) => void; // Adjusted the type here
}> = ({ index, currentIndex, setCurrentIndex, children, tabRef }) => {
  return (
    <div
      ref={tabRef}
      onClick={() => setCurrentIndex(index)}
      className={`cursor-pointer shrink-0 font-semibold text-xl sm:pb-2 pb-4 ${
        index === currentIndex ? "text-gray-950" : "text-gray-700"
      }`}
    >
      {children}
    </div>
  );
};

// ✅ TabsContainer Fix
const TabsContainer: React.FC<{
  data: string[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}> = ({ data, currentIndex, setCurrentIndex }) => {
  const tabRefs = useRef<HTMLDivElement[]>([]); // Correct ref typing
  const sliderRef = useRef<HTMLDivElement>(null); // Ref for the slider

  useEffect(() => {
    const currentTab = tabRefs.current[currentIndex];
    if (currentTab && sliderRef.current) {
      sliderRef.current.style.left = `${currentTab.offsetLeft}px`;
      sliderRef.current.style.width = `${currentTab.offsetWidth}px`;
    }
  }, [currentIndex, data]);

  return (
    <div>
      <div className="flex wrapper scrollbar-hide overflow-scroll gap-8 mb-20 sm:mb-6 relative">
        {data.map((item, index) => (
          <TabsHeader
            key={index}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            index={index}
            tabRef={(el) => {
              if (el) tabRefs.current[index] = el; // Assigning ref safely
            }}
          >
            {item}
          </TabsHeader>
        ))}

        {/* Slider */}
        <div
          ref={sliderRef}
          className="absolute bottom-0 h-[2px] bg-gray-950 transition-all duration-300"
        ></div>
      </div>
    </div>
  );
};

const CarouselContainer: React.FC<{
  data: string[];
  currentIndex: number;
}> = ({ data }) => {
  const progressNode = useRef<HTMLDivElement>(null);
  const options: EmblaOptionsType = { loop: true, align: "start" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);
  const { showAutoplayProgress } = useAutoplayProgress(
    emblaApi,
    progressNode as RefObject<HTMLDivElement>
  );
  const [openLarge, setOpenLarge] = useState(false);
  const handleClose = () => {
    setOpenLarge(false);
  };

  return (
    <div
      className={`overflow-hidden  max-w-screen top-0 left-0 z-[100] ${
        openLarge &&
        "fixed  grid place-items-center h-screen w-screen bg-black/70 backdrop-blur-xl"
      }`}
    >
      {openLarge && (
        <div
          onClick={handleClose}
          className="absolute cursor-pointer text-xl flex justify-center items-center size-6 p-0 rounded bg-white text-black top-4 left-4"
        >
          x
        </div>
      )}

      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className={`image-wrapper wrapper w-screen h-[300px] flex ${
            openLarge && "h-auto"
          }`}
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`item-wrapper h-full w-[500px] sm:w-[90%] shrink-0 flex-none pr-8 ${
                  openLarge &&
                  "w-full basis-full pr-0 grid place-content-center "
                }`}
              >
                <div
                  className={`image-wrapper overflow-hidden rounded-lg  relative w-full h-full ${
                    openLarge && "w-auto h-auto overflow-visible"
                  }`}
                >
                  <img
                    onClick={() => {
                      setOpenLarge(true);
                    }}
                    className={`object-cover w-full h-full ${
                      openLarge &&
                      "relative !w-auto !h-auto max-h-[90svh] max-w-[70vw]"
                    }`}
                    src={item}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`items wrapper mt-10 flex ${
          openLarge && "hidden"
        }  justify-between`}
      >
        <div className="two p-4 flex gap-2 rounded-3xl bg-secondary-100">
          <button
            className="embla__play"
            onClick={toggleAutoplay}
            type="button"
          >
            {autoplayIsPlaying ? (
              <CiPause1 color="#BF6217" size={20} />
            ) : (
              <CiPlay1 color="#BF6217" size={20} />
            )}
          </button>
          <div
            className={`embla__progress`.concat(
              showAutoplayProgress ? "" : " embla__progress--hidden"
            )}
          >
            <div className="embla__progress__bar" ref={progressNode} />
          </div>
        </div>

        <div className="flex gap-5">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

const CarouselParent = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const names = sliderImages.map((item) => item.name);
  return (
    <div className="w-full mt-10">
      <TabsContainer
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        data={names}
      />
      <CarouselContainer
        currentIndex={currentIndex}
        data={sliderImages[currentIndex].images}
      />
    </div>
  );
};

// pagination-group
