"use client"
import { useRouter } from 'next/navigation'
import { cn } from "@lib/utils"
function BackwardButton({ children, className }) {
  const router = useRouter();
  return (
    <div
      className={cn('cn', className)}
      onClick={() => router.back()}
    >
      {children}
    </div>
  )
}

export default BackwardButton