// shared utility functions

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  /**
   * The Cn function merges the seamlessly the tailwind classes where there is a conditional of the className
   */
  return twMerge(clsx(inputs))
}

export const capitalize = (input) => {

  const inputs = input.split("\s")
  let capitalized = [];
  for (let input of inputs) {

    // check if the input is a string
    if (typeof input === "string") {

      // capitalize the first letter and add the rest of the string
      let first = input[0].toUpperCase();
      let rest = input.slice(1);
      capitalized.push(first + rest);
    } else {
      // if the input is not a string, just add it to the array
      capitalized.push(input);
    }
  }
  // return the array of capitalized inputs
  return capitalized;
}