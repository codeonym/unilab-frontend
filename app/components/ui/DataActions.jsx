"use client"
import React from 'react'
import Link from 'next/link'
import { PiNotePencilFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { usePathname } from 'next/navigation';

function DataActions() {
  const path = usePathname()
  return (
    <div
      className="
      flex items-center gap-2 
      "
    >
      <Link
        href={`${path}/update`}
        className="btn bg-blue-400 btn-sm text-white"
      >
        <PiNotePencilFill />
      </Link>
      <Link
        href={`${path}/delete`}
        className="btn bg-rose-400 btn-sm text-white"
      >
        <MdDelete />
      </Link>
    </div>
  )
}

export default DataActions