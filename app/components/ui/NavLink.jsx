"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@lib/utils"

function NavLink({ bgColor, href, className, children }) {
  const currentPath = usePathname()
  return (
    <Link
      href={href}
      className={cn(className, currentPath === href ? bgColor : '')}
    >
      {children}
    </Link>
  )
}

export default NavLink