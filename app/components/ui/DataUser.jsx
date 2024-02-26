import React from 'react'
import { singleLinks } from '@config/admin/singleLinks'
import Link from "next/link"

function DataUser({ title, id }) {
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
        data-tip={"Voir utilisateur"}
        className='flex items-center gap-4 tooltip'
      >
        {singleLinks.users.icon}
        <Link
          href={`${singleLinks.users.href}/${id}`}
          className='
        hover:link-info
          p-4 whitespace-nowrap 
          cursor-pointer
          opacity-70 w-full overflow-x-scroll 
          scrollbar-thin scrollbar-track-base-200 
          scrollbar-thumb-base-300 bg-base-200 
          rounded-md'
        >
          {id}
        </Link>
      </div>
    </div>
  )
}

export default DataUser