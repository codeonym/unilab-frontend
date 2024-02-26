import React from 'react'

function TableSkeleton() {
  const arr = [... (new Array(20))]
  return (
    <section
      className='p-4
      h-full w-full gap-6
      mx-auto flex flex-col 
      items-center justify-center
      container
      '
    >
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <div className="flex w-full font-bold items-center justify-center">
          <div className="skeleton min-w-44 sm:w-1/2 md:w-1/3 h-8 sm:h-12"></div>
          <div className="ml-4 skeleton h-8 sm:h-12 w-8 sm:w-12 rounded-full"></div>
        </div>
        <span
          className='skeleton min-w-40 sm:w-1/3 md:w-1/4 h-2 sm:h-4'
        />
        <span
          className='skeleton min-w-32 sm:w-1/6 md:w-1/6 h-2 sm:h-4'
        />
      </div>
      <div className="flex gap-4 w-full justify-between flex-wrap items-center">
        <div className="relative flex gap-4 max-w-2xl items-center">
          <div className="skeleton w-12  h-12 rounded-full shrink-0"></div>
          <div className="skeleton min-w-44 sm:w-1/2 md:w-1/3 h-8 sm:h-12">
          </div>
        </div>
        <div className="skeleton h-12 w-20"></div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-4 w-full">
        {
          arr.map((entry, idx) => (
            <div
              key={idx}
              className="skeleton h-24 sm:32 w-full" />
          ))
        }
      </div>
    </section>
  )
}

export default TableSkeleton