"use client";
import { TextAreaProps } from "./Types";
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  required = false,
  placeholder,
  onChange,
  className,
  name,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-gray-950 text-base font-semibold mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        {...rest}
        name={name}
        style={{
          boxShadow: "0px 0px 0px 3px rgba(255, 247, 241, 0.92)",
        }}
        className="appearance-none resize-none border-secondary-200 border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none"
        placeholder={placeholder}
        required={required}
        rows={8}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
