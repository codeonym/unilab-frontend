import { RiBankCardFill } from "react-icons/ri"

function DataDate({ title, value }) {
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
        <RiBankCardFill />
        <div
          className='p-4 whitespace-nowrap opacity-70 w-full overflow-x-scroll scrollbar-thin scrollbar-track-base-200 scrollbar-thumb-base-300 bg-base-200 rounded-md'
        >
          {value}
        </div>
      </div>
    </div>
  )
}

export default DataDate