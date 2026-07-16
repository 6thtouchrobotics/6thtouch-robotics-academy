import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  isTextArea?: boolean;
}

export default function FormInput({
  label,
  name,
  type = "text",
  required = false,
  isTextArea = false,
  className = "",
  ...props
}: FormInputProps) {
  const commonClasses =
    "w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm font-sans";

  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={name} className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 font-sans">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          className={`${commonClasses} resize-none min-h-[120px]`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className={commonClasses}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
