import React from 'react'
import UserBox from "./UserBox"
import { GoBellFill } from "react-icons/go";
import Link from 'next/link'
import { IoMdSunny } from "react-icons/io"
import { PiMoonStarsFill } from 'react-icons/pi'
import { AiOutlinePlusCircle } from "react-icons/ai"
import { TiExport } from "react-icons/ti"
import { addLinks } from '@config/admin/addLinks';
import { exportLinks } from '@config/admin/exportLinks';

function Navbar() {
  return (
    <div className="navbar z-1 relative z-40 text-slate-600 shadow-sm px-4">
      <div className="flex-1" />
      <div className="flex-none">

        {/* Notifications icon */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  hover:bg-base-200">
            <div className="indicator">
              <GoBellFill className='text-xl' />
              <span className="badge badge-primary w-5 h-5 rounded-full badge-sm indicator-item">9</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">9 Notifications</span>
              <span className="text-info">You have 9 orders that needs review</span>
              <div className="card-actions">
                <Link
                  href="/dashboard/orders"
                  className="btn btn-primary btn-block">View More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mode switcher icon */}
        <div className="dropdown dropdown-end">
          <label className="swap swap-rotate btn btn-ghost btn-circle  hover:bg-base-200">

            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller hidden" value="sunset" />

            {/* sun icon */}
            <IoMdSunny className='swap-on text-xl' />
            {/* moon icon */}
            <PiMoonStarsFill className='swap-off text-xl' />
          </label>
        </div>

        {/* Add-action icon */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-base-200">
            <div className="text-xl relative before:inset-0 before:rounded-full before:ring-1 before:animate before:animate-ping before:absolute">
              <AiOutlinePlusCircle className='' />
            </div>
          </div>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">Ajouter nouveau</span>
              <div className="card-actions text-left">
                {addLinks.map((addLink, idx) => (
                  <Link
                    key={idx}
                    href={addLink.href}
                    className="btn-block rounded-md p-3 flex gap-2 items-center hover:bg-slate-600 hover:text-white">
                    {addLink.icon}
                    {addLink.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Export icon */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-base-200">
            <div className="text-xl">
              <TiExport className='' />
            </div>
          </div>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">Exporter</span>
              <div className="card-actions text-left">
                {exportLinks.map((exportLink, idx) => (
                  <Link
                    key={idx}
                    href={exportLink.href}
                    className="btn-block rounded-md p-3 flex gap-2 items-center hover:bg-slate-600 hover:text-white">
                    {exportLink.icon}
                    {exportLink.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <UserBox />
      </div>
    </div>
  )
}

export default Navbar