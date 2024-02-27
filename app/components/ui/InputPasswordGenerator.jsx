"use client"
import { useEffect, useState } from "react";
import { MdLock } from "react-icons/md"
import { cn } from "@lib/utils";
import { useDebouncedInputValidation } from "@hooks/useDebouncedInputValidation"
import { generate } from "generate-password"
import { PiGearSixFill } from "react-icons/pi"

const ERROR_CLASS = "input-error";

const passwordOptions = {
  length: 16,
  numbers: true,
  symbols: true,
  strict: true
}

function InputPasswordGenerator({ name, isRequired, setIsValidInput, inputValidationSchema, defaultValue }) {
  const { inputValue, isValid, handleInputChange } = useDebouncedInputValidation(setIsValidInput, inputValidationSchema, defaultValue)

  const [password, setPassword] = useState(inputValue)
  const generatePassword = () => {

    setPassword(generate(passwordOptions))
  }

  useEffect(() => {
    setPassword(inputValue)
  }, [inputValue])
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
        placeholder={"minimal 8 chiffres"}
        required={!!isRequired}
        value={password || ""}
        onChange={handleInputChange}
      />
      <div
        type={'button'}
        className="text-md btn btn-sm btn-neutral flex items-center justify-center opacity-70 "
        onClick={generatePassword}
      >
        <PiGearSixFill />
      </div>
    </label>
  );
}

export default InputPasswordGenerator;
