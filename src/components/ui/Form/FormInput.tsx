import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-gray-950 text-base font-semibold mb-2">
          {label}
        </label>
        <input
          ref={ref}
          placeholder={props.placeholder ?? " "} // Ensure placeholder is always set
          className={`appearance-none peer border-2 border-gray-500 p-2 rounded w-full py-4 px-3 text-gray-900 leading-tight focus:border-secondary-200 focus:outline-none 
          peer-[:not(:placeholder-shown)]:border-black
          focus:shadow-sm focus:shadow-secondary-200 shadow-sm shadow-[#9B9B9B0D] ${className}`}
          {...props}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
