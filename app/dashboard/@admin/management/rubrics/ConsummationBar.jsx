import React from 'react'
import { cn } from "@lib/utils"

const getBarColor = (value, max) => {

  const percentage = Math.ceil((value / max) * 100)
  if (percentage < 50)
    return "progress-success"
  if (percentage >= 50 && percentage < 95)
    return "progress-warning"
  if (percentage >= 95)
    return "progress-error"
}

function ConsummationBar({value, max}) {
  return (
    <progress className={cn("progress w-24", getBarColor(value, max))} value={Math.ceil((value / max) * 100)} max="100"></progress>
  )
}

export default ConsummationBar