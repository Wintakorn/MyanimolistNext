"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  name: string;
  type: string;
  labelText?: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customAttributes?: { [key: string]: string }; 
};

const FormInput = ({
  name,
  type,
  labelText,
  minLength,
  maxLength,
  defaultValue,
  placeholder,
  required = false,
  onChange,
  customAttributes,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      {/* Label */}
      {labelText && (
        <Label htmlFor={name} className="text-sm font-medium text-gray-700">
          {labelText}
        </Label>
      )}

      {/* Input */}
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        {...(customAttributes || {})}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default FormInput;
