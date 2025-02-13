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
          className={`appearance-none focus:border-black focus:border border border-gray-500 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none" ${className}`}
          {...props}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
