import React from 'react'
import Link from "next/link"
import { TbWorldWww } from "react-icons/tb"

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
        className='tooltip flex items-center gap-4 '
        data-tip={"Visiter"}
      >
        <TbWorldWww />
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
      </div>
    </div>
  )
}

export default DataWebsite