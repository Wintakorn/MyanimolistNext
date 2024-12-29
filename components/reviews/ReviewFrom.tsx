import React from 'react';

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

const TextAreaInput: React.FC<TextAreaInputProps> = ({
    name,
    labelText,
    defaultValue,
    placeholder,
    rows = 4,
    maxLength,
    minLength,
    required,
    onChange,
}) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-400 font-medium mb-2">
                {labelText}
            </label>
            <input
                style={{
                    border: '', 
                    
                    fontSize: '15px',
                    fontFamily: 'Arial, sans-serif',
                    width: '100%',
                }}
                id={name}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                // rows={rows}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                // onChange={onChange}
                className="w-full focus:outline-none focus:border-b-#333 border-b-2 border-gray-300 py-2"
            ></input>
        </div>
    );
};

export default TextAreaInput;
