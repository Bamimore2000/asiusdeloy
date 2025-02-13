"use client";

import { InputProps } from "./Types";

export const Input: React.FC<InputProps> = ({
  label,
  required = false,
  placeholder,
  onChange,
  type,
  name,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      e.target.value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    }
    onChange?.(e.target.value); // Pass only the value if onChange expects a string
  };

  return (
    <div className="mb-4 w-full">
      <label className="block w-full text-gray-950 text-base font-semibold mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        style={{
          boxShadow: "0px 1px 0px 1px rgba(155, 155, 155, 0.05)",
        }}
        type={type}
        className="appearance-none focus:border-black focus:border border border-gray-500 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none"
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        {...rest} // Spread additional props
      />
    </div>
  );
};
