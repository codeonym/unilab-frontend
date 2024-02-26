"use client"
import { IoSearch } from "react-icons/io5";
import { cn } from "@lib/utils";
import { useEffect, useState, useRef, useCallback } from "react";
import { IoClose } from "react-icons/io5"
function InputEmail({ title, data, name, placeholder, isRequired, defaultValue }) {

  // Use a ref to store the current selected id
  const selectedIdRef = useRef(defaultValue || null);

  // Use a state to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Use a state to store the filtered data
  const [filteredData, setFilteredData] = useState(data);

  // Use a state to store the toggle dropdown flag
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // Use a memoized callback to handle the search term change
  const searchTermHandler = useCallback((e) => {
    const term = e.target.value;
    setToggleDropdown(true);
    setSearchTerm(term);
    // Use includes for string comparison
    setFilteredData(data.filter((elem) => {

      // get the values of the object as an array
      const values = Object.values(elem);

      // join the values with a space
      const valueString = values.join(" ");

      // check if the valueString includes the term
      return valueString.includes(term)
    }));
  }, [data]);

  // Use a memoized callback to handle the selection change
  const selectionHandler = useCallback(
    (id) => {
      // Update the ref value
      selectedIdRef.current = id;
      // Close the dropdown
      setToggleDropdown(false);
    },
    [selectedIdRef]
  );

  return (
    <div className={"flex flex-col relative"}>
      <label
        className={cn(
          `input input-bordered 
        flex items-center w-full 
        max-w-72 sm:max-w-80 gap-2`
        )}
      >
        {title}
        <div className="w-4 h-4 opacity-70">
          <IoSearch />
        </div>

        <input
          type="hidden"
          name={name}
          // Use the ref value
          value={selectedIdRef.current || ''}
          required={!!isRequired}
        />
        <input
          type="text"
          className="grow w-full border-none focus:ring-0"
          placeholder={placeholder}
          value={searchTerm || ''}
          onChange={searchTermHandler}
          onFocus={() => setToggleDropdown(true)}
        />
        {selectedIdRef.current}
      </label>
      <div
        className={
          cn(`
          absolute z-[1]
          top-16
          shadow flex flex-col
          p-2 bg-base-100 rounded-box
          `,
            toggleDropdown || "hidden"
          )}
      >
        <span
          className="btn absolute right-4 top-4 btn-neutral btn-xs w-8"
          onClick={() => setToggleDropdown(false)}
        >
          <IoClose />
        </span>
        <div
          className="
          pt-4
          w-80 max-w-72 sm:max-w-80 gap-2 h-80
          overflow-y-scroll
          scrollbar-thin scrollbar-track-base-100 scrollbar-thumb-slate-200
          ">
          <li
            className="
            list-none  hover:bg-base-200 p-4 rounded-box flex gap-4
            "
            onClick={() => selectionHandler(null)}
          >
            Aucun(e)
          </li>
          {filteredData?.map((elem, idx) => (
            <li
              key={idx}
              className={cn(
                "list-none hover:bg-base-200 p-4 rounded-box flex gap-4",
                // Use the ref value
                selectedIdRef.current === elem.id && "btn-neutral"
              )}
              // Use the callback function
              onClick={() => selectionHandler(elem?.id)}
            >
              <span
                className="w-1/3"
              >{elem.id}</span>
              <span
                className="w-2/3"
              >{elem.nickName}</span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InputEmail;
