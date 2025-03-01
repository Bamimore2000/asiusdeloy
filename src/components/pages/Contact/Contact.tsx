"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CarouselSection } from "./CarouselSection";
import { zodResolver } from "@hookform/resolvers/zod";
import Notification from "./SuccessPage";
import { z } from "zod";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import { FormInput } from "@/components/ui/Form/FormInput";
import { FormTextArea } from "@/components/ui/Form/FormTextArea";
import React from "react";

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
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange", // Live validation
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      services: [],
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setSuccess(true);
      reset(); // ✅ Reset form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const selectedServices = watch("services"); // Track services state

  // Handle checkbox changes
  const handleCheckboxChange = (service: string) => {
    const currentServices = getValues("services");
    const newServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service];

    setValue("services", newServices as ContactFormData["services"], {
      shouldValidate: true, // ✅ Ensure validation runs after setting value
    });
  };

  if (success) {
    return <Notification setShowNotification={setSuccess} />;
  }

  return (
    <section className="py-20 lg:py-10">
      <div className="wrapper gap-5 flex mt-[80px]">
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
            link="mailto:enquiries@asiusdeloyltd.co.uk"
          />
          <ContactLink
            text="Message us on WhatsApp"
            link="https://wa.me/447899682616"
          />
          <ContactLink text="Call +447899682616" link="tel:+447899682616" />

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
              placeholder="Your@company.comk"
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
            <div className="mt-8">
              <FormTextArea
                label="Message"
                placeholder="How much does a cleaning service cost?"
                error={errors.message?.message}
                {...register("message")}
              />
            </div>

            <div className="second">
              <h3 className="block w-full mb-3 text-gray-950 text-base font-semibold">
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
                      checked={selectedServices.includes(service)} // ✅ Uses watch to track changes
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
            </div>

            <Button
              className={`bg-secondary-700 text-lg w-full text-white py-4 rounded-lg mt-16 ${
                !isValid || loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              text={loading ? "Submitting..." : "Book a service"}
              type="submit"
              disabled={!isValid || loading}
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
