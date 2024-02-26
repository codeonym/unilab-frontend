"use client"
import { MdLock } from "react-icons/md"
import { cn } from "@lib/utils";
import { useDebouncedInputValidation } from "@hooks/useDebouncedInputValidation"

const ERROR_CLASS = "input-error";

function InputPassword({ name, isRequired, setIsValidInput, inputValidationSchema, defaultValue }) {
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
      <div className="w-4 h-4 opacity-70">
        <MdLock />
      </div>
      <input
        type="text"
        name={name}
        className="grow w-full border-none focus:ring-0"
        placeholder={"Strong password"}
        required={!!isRequired}
        value={inputValue || ""}
        onChange={handleInputChange}
      />
    </label>
  );
}

export default InputPassword;
