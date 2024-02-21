// shared utility functions

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  /**
   * The Cn function merges the seamlessly the tailwind classes where there is a conditional of the className
   */
  return twMerge(clsx(inputs))
}
