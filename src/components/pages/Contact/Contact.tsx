"use client";

import { useForm } from "react-hook-form";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { EmblaOptionsType } from "embla-carousel";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PaginationVariant } from "../Home/reusables/HeroCarousel";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import { FormInput } from "@/components/ui/Form/FormInput";
import { FormTextArea } from "@/components/ui/Form/FormTextArea";
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

const services = ["Construction", "Engineering", "Technology", "Cleaning"];

// ✅ Define the Zod schema for validation
const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .regex(/^\+?\d{10,15}$/, "Invalid phone number format (e.g., +1234567890)"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange", // Enable live validation
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      services: [],
    },
  });

  // Handle form submission
  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
  };

  const selectedServices = watch("services"); // Track services state

  // Handle checkbox changes
  const handleCheckboxChange = (service: string) => {
    const currentServices = getValues("services");
    const newServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service];
    setValue("services", newServices);
  };

  return (
    <section className="py-20 lg:py-10">
      <div className="wrapper gap-5  flex mt-[80px]">
        <div className="item lg:basis-full basis-1/2">
          <h1 className="text-5xl lg:text-4xl sm:text-3xl mb-2 font-semibold text-gray-950">
            Let&apos;s work together
          </h1>
          <p className="text-gray-800 mb-10 text-lg">
            We are here to help. Chat to our friendly team 24/7 and get started
            within 5 minutes.
          </p>
          <ContactLink
            text="Shoot us an email"
            link="mailto:emmanuelar35@gmail.com"
          />
          <ContactLink
            text="Message us on WhatsApp"
            link="mailto:emmanuelar35@gmail.com"
          />
          <ContactLink
            text="Call +443425363646"
            link="mailto:emmanuelar35@gmail.com"
          />

          <form
            className="mt-8 flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex lg:flex-col gap-6">
              <FormInput
                label="First Name"
                placeholder="John"
                error={errors.firstName?.message}
                {...register("firstName")}
              />
              <FormInput
                label="Last Name"
                placeholder="Doe"
                error={errors.lastName?.message}
                {...register("lastName")}
              />
            </div>
            <FormInput
              type="email"
              label="Email"
              placeholder="Email address"
              error={errors.email?.message}
              {...register("email")}
            />
            <FormInput
              type="tel"
              label="Phone Number"
              placeholder="+4464675876586"
              error={errors.phone?.message}
              {...register("phone")}
            />
            <FormTextArea
              label="Message"
              placeholder="How much does a cleaning service cost?"
              error={errors.message?.message}
              {...register("message")}
            />
            <h3 className="block w-full text-gray-950 text-base font-semibold mb-2">
              Services
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex accent-secondary-700 items-center gap-1 space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)} // Use watch instead of getValues
                    onChange={() => handleCheckboxChange(service)}
                    className="w-4 h-4"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
            {errors.services && (
              <p className="text-red-500">{errors.services.message}</p>
            )}
            <Button
              className={`bg-secondary-700 text-lg w-full text-white py-4 rounded-lg mt-8 ${
                !isValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              text="Book a service"
              type="submit"
              disabled={!isValid}
            />
          </form>
        </div>
        <div className="image lg:hidden h-auto basis-1/2">
          <CarouselSection />
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ContactLink: React.FC<{ link: string; text: string }> = ({
  link,
  text,
}) => {
  return (
    <Link
      target="_blank"
      className="underline block my-2 text-lg text-secondary-700"
      href={link}
    >
      {text}
    </Link>
  );
};

const CarouselSection = () => {
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
