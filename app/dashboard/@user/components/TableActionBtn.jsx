"use client"
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import { PiNotePencilFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { usePathname } from "next/navigation";

const TableActionBtn = ({ actions, record }) => {
  const url = usePathname()
  return (
    <>
      {
        actions.view && (
          <Link
            href={`${url}/${record?.id}`}
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            <IoMdEye />
          </Link>
        )
      }
      {
        actions.edit && (
          <Link
            href={`${url}/${record?.id}/update`}
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            <PiNotePencilFill />
          </Link>
        )
      }
      {
        actions.delete && (
          <Link
            href={`${url}/${record?.id}/delete`}
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 hover:text-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            <MdDelete />
          </Link>
        )
      }
    </>
  )
}

export default TableActionBtn