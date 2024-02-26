import { cn } from "@lib/utils"
import { useFormStatus } from "react-dom"


function InputSubmit({ name, title, isValidForm }) {

  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      name={name}
      className={cn("btn btn-neutral w-full max-w-72 sm:max-w-80", isValidForm || "btn-disabled", pending && "btn-disabled")}
    >
      {
        pending ? (
          <span className="loading loading-spinner bg-cyan-400 w-8"></span>
        ) : (
          title 
        )
      }
    </button>
  )
}

export default InputSubmit