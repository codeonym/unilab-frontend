"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { CgMenuGridO } from "react-icons/cg"
import { RxCross2 } from "react-icons/rx";
import NavLink from '@components/ui/NavLink'
import { navLinks } from "@config/admin/navLinks"
import { cn } from "@lib/utils"


const DashboardSidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <aside
      className={cn(
        `
      fixed
      z-10
      bg-inherit
      sm:relative
      box-border
      transition-all
      duration-300
      min-h-screen
      border-r-2
      border-slate-50
          `,
        sidebarOpen
          ? "w-0"
          : "w-full sm:w-80"
      )}>
      <label
        className="
        btn 
        z-10
        text-slate-500 
        btn-ghost
        hover:bg-transparent
        hover:text-slate-600
        swap 
        swap-rotate 
        absolute 
        top-2
        sm:left-full"
      >

        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className='hidden' onClick={() => setSidebarOpen((prev) => !prev)} />

        {/* hamburger icon */}
        <CgMenuGridO className="swap-off text-2xl" />
        {/* close icon */}
        <RxCross2 className="swap-on text-2xl" />
      </label>
      <div
        className="
        pt-16
        max-h-screen
        overflow-y-auto
        scrollbar-thin 
        scrollbar-thumb-slate-200 
        scrollbar-track-slate-100
        scrollbar-rounded-md
      text-slate-500
        flex-shrink-0
        flex-col flex
      ">
        {/* Logo */}
        <div
          className="
            pt-16
            pb-8
            flex
            items-center
            flex-col
            justify-between
            space-y-4
            ">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={120}
            height={24}
            className="" />
        </div>

        <div className="divider">Menu</div>

        {/* Sidebar Links */}
        <nav className="p-4">
          <ul className="menu w-full space-y-2 rounded-box">
            {
              navLinks && navLinks.map((navLink, idx) => (
                <li
                  key={idx}
                >
                  <NavLink bgColor="bg-slate-600 text-white" href={navLink.href}
                    className="flex items-center p-3 font-thin text-base hover:bg-slate-600 hover:text-white rounded gap-2">
                    {navLink.icon}
                    {navLink.title}
                  </NavLink>
                  {navLink?.subMenu && (
                    <ul
                      className='space-y-1'
                    >
                      {navLink.subMenu.map((subLink, idx) => (
                        <li
                          key={idx}
                        >
                          <NavLink bgColor="bg-slate-600 text-white" href={subLink.href}
                            className="flex items-center p-3 font-thin hover:bg-slate-600 hover:text-white rounded gap-2">
                            {subLink.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

    </aside>
  )
}

export default DashboardSidebar