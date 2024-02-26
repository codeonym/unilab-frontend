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

export const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-200 text-yellow-800';
    case 'Completed':
      return 'bg-green-200 text-green-800';
    case 'Cancelled':
      return 'bg-red-200 text-red-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

export const searchForTerm = async (data, term) => {

  const result = data.filter((obj) => {
      
      // loop through the object values
    for (let value of Object.values(obj)) {
        
        // convert the value to a string and lowercase it
        value = String(value).toLowerCase();

        // check if the value includes the search text
      if (value.includes(term)) {
          
          // return true to keep the element in the new array
          return true;
        }
      }
      // return false to discard the element from the new array
      return false;
  });
  
    // return the result array
    return result

}
  

export const pagination = async (data, currentPage, limit = 15) => {

  // calculate the total number of pages
  const totalPages = Math.ceil(data.length / limit);

  // ensure the current page is not out of range
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  // calculate the start and end indexes for slicing the data
  const start = (currentPage - 1) * limit;
  const end = currentPage * limit;

  // slice the data according to the start and end indexes
  const slicedData = data.slice(start, end);

  // return an object with the sliced data, the current page, and the total pages
  return {
    data: slicedData,
    currentPage: currentPage,
    totalPages: totalPages,
  };
};