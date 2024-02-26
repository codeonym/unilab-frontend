"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { cn } from "@lib/utils"
const TablePagination = ({currentPage, totalPages}) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const clickHandler = (step) => {
    const params = new URLSearchParams(searchParams);
    let nextPage = currentPage + step
    if (nextPage < 1)
      nextPage = totalPages
    else if (nextPage > totalPages)
      nextPage = 1
    params.set('page', nextPage)
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <div className="join">
      <button
        onClick={() => clickHandler(-1)}
        className={cn("join-item btn")}>
        «
      </button>
      <button className="join-item btn">{currentPage}</button>
      <button
        onClick={() => clickHandler(1)}
        className={cn("join-item btn")}>
        »
      </button>
    </div>
  )
}
export default TablePagination