import React from 'react'

function SectionHeader({title, icon, description}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex font-bold items-center justify-center text-xl sm:text-2xl md:text-3xl gap-2 relative before:absolute before:w-2/3 before:h-2 before:rounded-full before:bg-base-200 before:-bottom-4">
        <h1
          className=''>
          {title}
        </h1>
        {icon}
      </div>
      <span
        className=''
      >
        {description}
      </span>
    </div>
  )
}

export default SectionHeader