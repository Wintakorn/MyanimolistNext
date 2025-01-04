import React from "react";

type SelectInputProps = {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  isMulti?: boolean;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
};

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  placeholder,
  required = false,
  isMulti = false,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    if (onChange) {
      onChange(isMulti ? selectedOptions : selectedOptions[0]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        multiple={isMulti}
        onChange={handleChange}
        value={value} // ใช้ค่าจาก props
        className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      >
        {placeholder && !isMulti && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
