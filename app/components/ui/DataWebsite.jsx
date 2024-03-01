import React from 'react'
import Link from "next/link"
import { TbWorldWww } from "react-icons/tb"
import {cn} from "@lib/utils";

function DataWebsite({ title, value }) {
  return (
    <div
      className='
      flex flex-col gap-2 w-72 
      sm:w-80 p-4 shadow shadow-base-300'
    >
      <span
        className='font-bold'
      >
        {title}
      </span>
      <div
          className={cn('flex items-center gap-4', value && "tooltip")}
        data-tip={"Visiter"}
      >
        <TbWorldWww />
        {
          value
              ? (
                  <Link
                      href={value}
                      className='
                      hover:link-info
                      p-4 whitespace-nowrap
                      cursor-pointer
                      opacity-70 w-full overflow-x-scroll
                      scrollbar-thin scrollbar-track-base-200
                      scrollbar-thumb-base-300 bg-base-200
                      rounded-md'
                  >
                    {value}
                  </Link>
              )
              :(
                  <div
                      className='
                    p-4 whitespace-nowrap
                    opacity-70 w-full overflow-x-scroll
                    scrollbar-thin scrollbar-track-base-200
                    scrollbar-thumb-base-300 bg-base-200
                    rounded-md'
                  >
                    {"N/A"}
                  </div>
              )
        }
      </div>
    </div>
  )
}

export default DataWebsite