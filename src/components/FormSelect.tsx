import React from "react";

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  required?: boolean;
}

export default function FormSelect({
  label,
  name,
  required = false,
  children,
  className = "",
  ...props
}: FormSelectProps) {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={name} className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 font-sans">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm font-sans appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
          backgroundPosition: "right 0.75rem center",
          backgroundSize: "1.25rem 1.25rem",
          backgroundRepeat: "no-repeat",
          paddingRight: "2.5rem"
        }}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
