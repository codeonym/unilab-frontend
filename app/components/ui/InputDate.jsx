"use client"
import { cn } from "@lib/utils";
import { useDebouncedInputValidation } from "@hooks/useDebouncedInputValidation"

const ERROR_CLASS = "input-error";

function InputDate({ title, name, placeholder, isRequired, setIsValidInput, inputValidationSchema, defaultValue }) {
  const { inputValue, isValid, handleInputChange } = useDebouncedInputValidation(setIsValidInput, inputValidationSchema, defaultValue)

  return (
    <label
      className={cn(
        `input input-bordered 
        flex items-center w-full 
        max-w-72 sm:max-w-80 gap-2`,
        isValid || ERROR_CLASS
      )}
    >
      {title}
      <input
        type="date"
        name={name}
        className="grow w-full border-none focus:ring-0"
        placeholder={placeholder}
        required={!!isRequired}
        value={inputValue || ""}
        onChange={handleInputChange}
      />
    </label>
  );
}

export default InputDate;
