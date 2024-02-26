"use client"
import { cn } from "@lib/utils";
import { useDebouncedInputValidation } from "@hooks/useDebouncedInputValidation"

const ERROR_CLASS = "input-error";

function InputSelect({ title, name, options, isRequired, setIsValidInput, inputValidationSchema, defaultValue }) {
  const { inputValue, isValid, handleInputChange } = useDebouncedInputValidation(setIsValidInput, inputValidationSchema, defaultValue)

  return (
    <select
      name={name}
      className={cn(
        `input input-bordered 
        flex items-center w-full
        max-w-72 sm:max-w-80 gap-2`,
        isValid || ERROR_CLASS
      )}
      required={!!isRequired}
      value={inputValue || ""}
      onChange={handleInputChange}
    >
      <option disabled value="">
        {title}
      </option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default InputSelect;