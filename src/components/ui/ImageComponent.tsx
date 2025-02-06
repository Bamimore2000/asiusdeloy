import React from "react";
import Image from "next/image";

type ImageComponentProps = {
  src: string; // The image source URL
  alt: string; // Alt text for accessibility
  width?: number; // Width of the image (only needed for Next.js <Image />)
  height?: number; // Height of the image (only needed for Next.js <Image />)
  className?: string; // Optional className for styling
  isNextImage?: boolean; // Whether to use Next.js Image component or regular img tag
};

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  isNextImage = false,
}) => {
  // When isNextImage is true, use the Next.js Image component for optimization
  if (isNextImage) {
    if (!width || !height) {
      console.warn(
        "Width and height are required when using Next.js <Image />."
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        width={width!} // Ensuring the width is not undefined
        height={height!} // Ensuring the height is not undefined
        className={className}
        layout="intrinsic" // Use this for responsive images
      />
    );
  }

  // If isNextImage is false, use a regular <img> tag
  return <img src={src} alt={alt} className={className} />;
};

export default ImageComponent;
