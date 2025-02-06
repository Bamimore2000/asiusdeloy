"use client";
import { useState } from "react";
import { useWindowSize } from "@/components/hooks/useWindowSize";
import { IoIosArrowDown } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button/Button";

interface FaqItem {
  question: string;
  answer: string;
}

const mockFaqs: FaqItem[] = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact our support team within 30 days for a full refund.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer:
      "Yes, our support team is available 24/7 via live chat and email to assist you with any issues or inquiries.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out to our support team via email at support@example.com or use the live chat feature on our website.",
  },
  {
    question: "Can I upgrade my subscription plan?",
    answer:
      "Yes, you can upgrade your plan at any time from your account settings. The price difference will be adjusted based on your current subscription.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to sign up.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use industry-standard encryption and a secure payment gateway to process transactions safely.",
  },
  {
    question: "Do you offer discounts for students?",
    answer:
      "Yes, we provide special discounts for students and non-profit organizations. Please contact our support team for more details.",
  },
  {
    question: "Can I use your service on multiple devices?",
    answer:
      "Yes, your account allows you to access our service from multiple devices without any limitations.",
  },
  {
    question: "What happens if I forget my password?",
    answer:
      "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions sent to your email.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "Yes, we have a mobile app available for both iOS and Android. You can download it from the App Store or Google Play.",
  },
];

const Faq: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const windowSize = useWindowSize();
  const isMobile = (windowSize?.width as number) < 767;

  return (
    <section className="py-20 text-white bg-black">
      <div className={`${!isMobile && "wrapper"}`}>
        <h4 className={`${isMobile && "wrapper"}`}>Have a question?</h4>
        <div className="items flex justify-between lg:flex-col lg:gap-10 items-start">
          <div className={`${isMobile && "wrapper h-max"}`}>
            <h3 className="text-4xl sm:text-3xl font-semibold my-8">
              We have 24/7 <br /> support available
            </h3>
            <Button
              primary
              className="!text-black bg-white"
              text="Reach out to admin"
            />
          </div>
          <FaqSection
            faqs={mockFaqs}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </section>
  );
};

interface FaqSectionProps {
  faqs: FaqItem[];
  currentIndex: number | null;
  setCurrentIndex: (index: number | null) => void;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <div className="bg-gray-800 flex-1 max-w-[480px] lg:max-w-[1000px] lg:mt-4 lg:self-start lg:w-full lg:max-w-auto self-end mt-[10rem] lg:p-0 p-5 lg:rounded-none rounded-xl">
      <div className="faq-wrapper wrapper">
        {faqs.map((faq, index) => (
          <Item
            key={index}
            index={index}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            faq={faq}
          />
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  index: number;
  currentIndex: number | null;
  setCurrentIndex: (index: number | null) => void;
  faq: FaqItem;
}

const Item: React.FC<ItemProps> = ({
  index,
  currentIndex,
  setCurrentIndex,
  faq,
}) => {
  const isOpen = index === currentIndex;

  return (
    <div className=" py-4">
      <div
        className="question text-white flex gap-5 items-center cursor-pointer"
        onClick={() => setCurrentIndex(isOpen ? null : index)}
      >
        <p className="font-semibold">{faq.question}</p>
        <span
          className={`duration-500 transition-all ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown />
        </span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="answer  text-gray-300"
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: "100px", opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
