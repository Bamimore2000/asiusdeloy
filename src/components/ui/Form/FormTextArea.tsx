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
          className={`appearance-none resize-none border-secondary-200 text-gray-700 leading-tight focus:outline-none" w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary-700 ${className}`}
          {...props}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

FormTextArea.displayName = "FormTextArea";
