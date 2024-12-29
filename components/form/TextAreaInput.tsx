import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
  placeholder = "Enter your text here...",
  rows = 5,
  required = false,
  onChange,
}: TextAreaInputProps) => {
  return (
    <div className="mb-4">
      {/* Label */}
      {labelText && (
        <Label htmlFor={name} className="capitalize text-sm font-medium text-gray-700">
          {labelText || name}
        </Label>
      )}

      {/* Textarea */}
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        required={required}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default TextAreaInput;
