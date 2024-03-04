"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCircleUser } from "react-icons/fa6"
import { RiShutDownLine } from "react-icons/ri"
import { useSession } from 'next-auth/react'
import { signOut } from "next-auth/react"

function UserBox() {

  const { data } = useSession()
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-base-200">
          {data?.user?.image != null
            ? (
              <div className="w-10 rounded-full">
                <Image
                  height={37}
                  width={37}
                  alt={"A"}
                  src={data?.user.image}
                  />
              </div>
            )
            : (
              <div
                className='avatar placeholder online'
              >
                <div className="w-10 bg-neutral text-neutral-content rounded-full">
                  {data?.user?.email?.substring(0, 2)}
                </div>
              </div>
            )
          }
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
        <li
          className="gap-1 text-lg border-b-2 p-3 border-slate-100 ">
          {data?.user?.name || data?.user?.email}
        </li>
        <li>
          <Link
            href="/dashboard/profile"
            className="hover:bg-slate-600 hover:text-white p-3 gap-1">
            <FaCircleUser />
            Profile
          </Link>
        </li>
        <li>
          <button
            onClick={async () => {
              await signOut({ callbackUrl: "/dashboard" })
            }}
            className="hover:bg-slate-600 hover:text-white p-3 gap-1"
          >
            <RiShutDownLine />
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default UserBox