"use client"
import { FaLock } from "react-icons/fa"
import { IoMdEye } from "react-icons/io"
import { IoMdEyeOff } from "react-icons/io"

import { useState } from "react"

function DataDate({ title, value }) {

  const [visibility, setVisibility] = useState(false)
  return (
    <div
      className='flex flex-col gap-2 w-72 sm:w-80 p-4 shadow shadow-base-300'
    >
      <span
        className='font-bold'
      >
        {title}
      </span>
      <div
        className='flex items-center gap-4 '
      >
        <FaLock />
        <div
          className='p-4 whitespace-nowrap opacity-70 w-full overflow-x-scroll scrollbar-thin scrollbar-track-base-200 scrollbar-thumb-base-300 bg-base-200 rounded-md'
        >
          {visibility ? value : "*".repeat(value.length)}
        </div>
        <div
          className="
          btn btn-sm btn-neutral
          "
          onClick={() => setVisibility((prev) => !prev)}
        >
          {visibility
            ? (
              <IoMdEyeOff
              />
            )
            : (
              <IoMdEye
              />
            )}
        </div>
      </div>
    </div>
  )
}

export default DataDate