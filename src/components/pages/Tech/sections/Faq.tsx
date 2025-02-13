"use client";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <section className="py-20">
      <div className="wrapper">
        <h4 className="text-4xl font-semibold mb-4 text-gray-950">FAQ</h4>
        <h5 className="text-gray-700 text-3xl mb-20 sm:mb-10 font-semibold">
          Your questions answered
        </h5>
        <div className="items">
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
    <div className="">
      <div className="faq-wrapper max-w-[480px] mx-auto">
        {faqs.map((faq, index) => (
          <Item
            length={faqs.length}
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
  length: number;
}

const Item: React.FC<ItemProps> = ({
  index,
  currentIndex,
  setCurrentIndex,
  faq,
  length,
}) => {
  const isOpen = index === currentIndex;

  return (
    <div
      className={`py-4 ${index !== length - 1 && "border-b border-b-gray-500"}`}
    >
      <div
        className="question w-full text-white flex justify-between gap-5 items-center cursor-pointer"
        onClick={() => setCurrentIndex(isOpen ? null : index)}
      >
        <p className="font-semibold text-gray-950">{faq.question}</p>
        <span
          className={`duration-500 size-8 text-base text-black font-semibold flex p-0 justify-center items-center rounded-lg bg-gray-400 transition-all $`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <AnimatePresence mode="sync" initial={false}>
        {isOpen && (
          <motion.div
            className="answer  text-gray-300"
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: "100px", opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
