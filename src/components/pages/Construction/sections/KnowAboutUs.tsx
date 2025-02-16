"use client";
import { useEffect, useRef, useState } from "react";

const KnowAboutUs = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [boldIndex, setBoldIndex] = useState(0); // Track how many words should be bold

  const text =
    "At Asiusdeloy Ltd, we understand that construction is more than just bricks and mortar—it’s about creating strong foundations, well-structured spaces, and environments that serve a purpose. Whether you’re building from the ground up";

  const words = text.split(" "); // Split text into individual words

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, 1 - rect.top / window.innerHeight); // Normalize scroll progress
      const wordsToBold = Math.floor(scrollProgress * words.length); // Determine how many words to bold
      setBoldIndex(wordsToBold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="item mx-auto max-w-[768px]">
          <h4 className="text-[#8A8A8A] text-xl sm:text-base mb-6">
            *Know about us
          </h4>
          <h5
            ref={textRef}
            className="text-5xl md:text-4xl sm:!text-3xl text-pretty leading-[3.2rem] text-gray-600"
          >
            {words.map((word, index) => (
              <span
                key={index}
                className={`transition-all duration-300 ${
                  index < boldIndex
                    ? "font-bold text-gray-900"
                    : "text-gray-600"
                }`}
              >
                {word}{" "}
              </span>
            ))}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default KnowAboutUs;
