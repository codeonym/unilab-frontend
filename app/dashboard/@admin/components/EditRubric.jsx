"use client"
import { useState, useEffect, useRef } from "react"
import InputText from "@components/ui/InputText"
import InputNumber from "@components/ui/InputNumber"
import InputSubmit from "@components/ui/InputSubmit"
import { rubricValidationSchema } from "@lib/inputValidation"
import { toast } from 'react-hot-toast'
import {redirect} from "next/navigation";
import {singleLinks} from "@config/admin/singleLinks";

function EditRubric({ formActionHandler, rubricData }) {

  const [isValidCode, setIsValidCode] = useState(!!rubricData)
  const [isValidDesignation, setIsValidDesignation] = useState(!!rubricData)
  const [isValidAllocatedAmount, setIsValidAllocatedAmount] = useState(!!rubricData)
  const [isValidEngagedAmount, setIsValidEngagedAmount] = useState(!!rubricData)

  const [isValidForm, setIsValidForm] = useState(!!rubricData)

  const formRef = useRef(null)

  useEffect(() => {
    const res = isValidCode
      && isValidDesignation
      && isValidAllocatedAmount
      && isValidEngagedAmount

    setIsValidForm(res)
  },
    [
      isValidCode,
      isValidDesignation,
      isValidAllocatedAmount,
      isValidEngagedAmount,
    ])
  const formAction = async (formData) => {

    const jsonObject = {};
    formData.forEach((value, name) => {
      jsonObject[name] = value;
    })

    if (jsonObject.engagedAmount > jsonObject.allocatedAmount) {

      toast.error("Montant engagé doit etre inferieur ou égal au montant alloué")
      return false
    }

    const res = await formActionHandler(jsonObject)
    if (res.ok) {
        redirect(singleLinks.rubrics.href + "/" + res?.data?.rubricId)
        toast.success(res.message)
        formRef.current.reset()
    }
    else
      toast.error(res.message)

  }
  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col items-center justify-center gap-4 mt-4 sm:grid-cols-2">

      {rubricData && (
        <input
          type={"hidden"}
          name={'id'}
          value={rubricData?.id}
        />
      )}

      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputNumber
          name={"code"}
          title={"Code"}
          placeholder={"23271000"}
          isRequired={true}
          setIsValidInput={setIsValidCode}
          inputValidationSchema={rubricValidationSchema.code}
          defaultValue={rubricData?.code}
        />
        <InputText
          name={"designation"}
          title={"Désignation"}
          placeholder={"Doe"}
          isRequired={true}
          setIsValidInput={setIsValidDesignation}
          inputValidationSchema={rubricValidationSchema.designation}
          defaultValue={rubricData?.designation}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputNumber
          name={"allocatedAmount"}
          title={"M.Alloué"}
          placeholder={"27500"}
          isRequired={false}
          setIsValidInput={setIsValidAllocatedAmount}
          inputValidationSchema={rubricValidationSchema.allocatedAmount}
          defaultValue={rubricData?.allocatedAmount}
        />
        <InputNumber
          name={"engagedAmount"}
          title={"M.engagé"}
          placeholder={"30000"}
          isRequired={false}
          setIsValidInput={setIsValidEngagedAmount}
          inputValidationSchema={rubricValidationSchema.engagedAmount}
          defaultValue={rubricData?.engagedAmount}
        />
      </div>
      <InputSubmit
        name={"submit"}
        title={"Ajouter"}
        isValidForm={isValidForm}
      />
    </form>
  )
}

export default EditRubric