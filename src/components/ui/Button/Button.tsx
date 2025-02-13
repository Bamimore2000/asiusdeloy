import React from "react";

type ButtonProps = {
  text: string;
  primary?: boolean;
  href?: string; // Optional href for link behavior
  onClick?: () => void; // Optional onClick handler for button behavior
  className?: string; // Custom class names for styling
  type?: "button" | "submit" | "reset"; // Button type
  disabled?: boolean; // Disable the button or link
  isLoading?: boolean; // Show loading state
  ariaLabel?: string; // ARIA label for accessibility
  target?: "_blank" | "_self" | "_parent" | "_top"; // Optional target for links
  rel?: string; // Optional rel for links (e.g., 'noopener noreferrer')
};

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  ariaLabel,
  primary,
  target = "_self",
  rel = "noopener noreferrer",
}) => {
  // Loading state spinner
  const loadingSpinner = (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12a8 8 0 0116 0"
      />
    </svg>
  );

  // Link behavior
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`btn ${
          primary &&
          "bg-gray-950 sm:text-base sm:px-4 sm:py-3 text-gray-100 rounded-lg px-8 py-3 font-semibold"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        aria-disabled={disabled}
      >
        {isLoading ? loadingSpinner : text}
      </a>
    );
  }

  // Button behavior
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`btn ${
        primary &&
        "bg-gray-950 sm:text-base sm:px-4 sm:py-3 text-gray-100 rounded-lg px-8 py-3 font-semibold"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className} `}
      aria-label={ariaLabel}
      aria-disabled={disabled || isLoading}
    >
      {isLoading ? loadingSpinner : text}
    </button>
  );
};

export default Button;
