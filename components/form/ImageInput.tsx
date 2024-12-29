import { Label } from "../ui/label";
import { Input } from "../ui/input";

type ImageInputProps = {
  name: string; // Name of the input field
  label?: string; // Optional label text
  required?: boolean; // Optional: Whether the field is required
};

const ImageInput: React.FC<ImageInputProps> = ({
  name,
  label = "Upload Image", // Default label
  required = false,
}) => {
  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required={required}
        accept="image/*"
        className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
      />
    </div>
  );
};

export default ImageInput;
