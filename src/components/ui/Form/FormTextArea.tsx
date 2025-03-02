import { forwardRef } from "react";

interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-gray-950 text-base font-semibold mb-2">
          {label}
        </label>
        <textarea
          style={{
            boxShadow: "0px 0px 0px 3px rgba(255, 247, 241, 0.92)",
          }}
          rows={8}
          ref={ref}
          className={`appearance-none ${
            error && "!border-red-600"
          } outline-none focus:shadow-sm placeholder:text-gray-700 focus:shadow-secondary-200 shadow-sm shadow-[#9B9B9B0D] peer border-2 border-gray-500 p-2 focus:border-secondary-200  focus:border rounded w-full py-4 px-3 text-gray-900 leading-tight focus:outline-none" ${className}`}
          {...props}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

FormTextArea.displayName = "FormTextArea";
