"use client"
import BackwardButton from '@components/ui/BackwardButton'
import InputSubmit from '@components/ui/InputSubmit'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { IoClose } from "react-icons/io5";

function DeleteResource({ resourceId, resourceDeleteHandler, confirmationWord }) {

  const [isValidForm, setIsValidForm] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

  useEffect(() => {
    setIsValidForm(inputValue === confirmationWord)
  }, [inputValue, confirmationWord])

  const onChangeHandler = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const formAction = async (formData) => {
    const res = await resourceDeleteHandler(resourceId)
    if (res.ok) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
    router.back()
  }
  return (
    <dialog id="my_modal_5" className="modal modal-bottom modal-open sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Attention !</h3>
        <p className="py-4">
          Vous êtes sur le point
          d&apos;effectuer une action dangereuse
          (supprimer une ressource).
          Procédez avec prudence.
          Veuillez saisir le texte
          <span className='badge p-4 mx-2 font-bold'>
            {confirmationWord}
          </span> dans le champ
          ci-dessous pour confirmer
        </p>
        <input
          type="text"
          placeholder="Confirmation"
          className="input input-bordered w-full max-w-xs"
          onChange={onChangeHandler}
        />
        <div className="modal-action flex gap-2">
          <form
            action={formAction}
            >
            <InputSubmit
              name={"confirm"}
              title={"Supprimer"}
              isValidForm={isValidForm}
            />
            <BackwardButton
              className={"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"}
            >
              <IoClose />
            </BackwardButton>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default DeleteResource