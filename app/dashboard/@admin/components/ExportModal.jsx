"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"

function ExportModal({ resource }) {

  const router = useRouter()

  const clickHandler = async (url) => {

    router.back()
  }
  return (
    <dialog className="modal modal-bottom modal-open sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{resource?.title}</h3>
        <p className="py-4">Séléctionner le format souhaité:</p>
        <div
          className="
          flex gap-2 
          "
        >
          {resource?.data?.map((el, idx) => (
            <div
              key={idx}
              //href={el.url}
              className="btn btn-neutral"
              onClick={async () => await clickHandler(el.url)}
            >
              {el.icon} {el.type}
            </div>
          ))}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="
              btn btn-sm btn-circle btn-ghost
              absolute right-2 top-2
              "
              onClick={clickHandler}
            >
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default ExportModal