"use client"
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useDebouncedInputValidation = (setIsValidInput, inputValidationSchema, defaultValue=null, debounceDelay = 1000) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);

  // Debounce the input validation
  const validateInputDebounced = useDebouncedCallback(
    (value) => {
      try {
        inputValidationSchema.parse(value);
        setIsValid(true);
        setIsValidInput(true);
      } catch (error) {
        setIsValid(false);
        setIsValidInput(false);
      }
    },
    debounceDelay
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Call the debounced validation function
    validateInputDebounced(value);
  };

  return { inputValue, isValid, handleInputChange };
};
