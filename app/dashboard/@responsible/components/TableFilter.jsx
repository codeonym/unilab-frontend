"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { BsSortUpAlt, BsSortDownAlt } from "react-icons/bs"

function TableFilter() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // create a sort handler
  const handleSort = (direction = "asc") => {
    const params = new URLSearchParams(searchParams);
    switch (direction) {
      case "asc":
        params.delete('sort')
        break
      case "desc":
        params.set('sort', "desc")
    }
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <details className="dropdown dropdown-left dropdown-start">
      <summary
        type="button"
        className="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-base-200 bg-base-200 px-5 py-2 text-center text-sm font-medium text-slate-500 hover:bg-base-300 focus:shadow focus:shadow-base-200 sm:mr-0"
      >
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        <svg
          className="mr-2 h-3 w-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        Filter
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li
          onClick={() => handleSort("asc")}
        ><a> <BsSortDownAlt /> Ascending</a></li>
        <li
          onClick={() => handleSort("desc")}
        ><a> <BsSortUpAlt /> Descending</a></li>
      </ul>
    </details>
  )
}

export default TableFilter