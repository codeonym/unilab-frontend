import { cn, capitalize } from "@lib/utils"
function DataAvatar({className, fontSize, ancName}) {
  return (
    <div className="avatar placeholder">
      <div className={cn('bg-neutral text-neutral-content rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-24', className)}>
        <span className={cn("text-xl" ,fontSize) }>
          {capitalize(ancName)}
        </span>
      </div>
    </div>
  )
}

export default DataAvatar