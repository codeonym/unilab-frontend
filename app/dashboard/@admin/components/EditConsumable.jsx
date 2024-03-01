"use client"
import { useState, useEffect, useRef } from "react"
import InputText from "@components/ui/InputText"
import InputNumber from "@components/ui/InputNumber"
import InputSubmit from "@components/ui/InputSubmit"
import InputSearch from "@components/ui/inputSearch"
import { consumableValidationSchema } from "@lib/inputValidation"
import { toast } from 'react-hot-toast'
import {redirect} from "next/navigation";
import {singleLinks} from "@config/admin/singleLinks";

function EditMaterial({ formActionHandler, consumableData, laboratoriesArray, suppliersArray }) {

  const [isValidQuantity, setIsValidQuantity] = useState(!!consumableData)
  const [isValidType, setIsValidType] = useState(!!consumableData)

  const [isValidForm, setIsValidForm] = useState(!!consumableData)

  const formRef = useRef(null)

  useEffect(() => {
    const res = isValidQuantity
      && isValidType

    setIsValidForm(res)
  },
    [
      isValidQuantity,
      isValidType,
    ])
  const formAction = async (formData) => {

    const jsonObject = {};
    formData.forEach((value, name) => {
      jsonObject[name] = value;
    })

    const res = await formActionHandler(jsonObject)
    if (res.ok) {
      toast.success(res.message)
      redirect(singleLinks.consumables.href + "/" + res?.data?.supplierId)
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

      {consumableData && (
        <input
          type={"hidden"}
          name={'id'}
          value={consumableData?.id}
        />
      )}

      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"type"}
          title={"Type"}
          placeholder={"Clés USB"}
          isRequired={true}
          setIsValidInput={setIsValidType}
          inputValidationSchema={consumableValidationSchema.type}
          defaultValue={consumableData?.type}
        />
        <InputNumber
          name={"quantity"}
          title={"Qté"}
          placeholder={"200"}
          isRequired={true}
          setIsValidInput={setIsValidQuantity}
          inputValidationSchema={consumableValidationSchema.quantity}
          defaultValue={consumableData?.quantity}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputSearch
          title={"Fournisseur"}
          name={"supplierId"}
          placeholder={'Chercher par id, nom ...'}
          isRequired={false}
          defaultValue={consumableData?.supplierId}
          data={suppliersArray}
        />
        <InputSearch
          title={"Laboratoire"}
          name={"laboratoryId"}
          placeholder={'Chercher par id, nom ...'}
          isRequired={false}
          defaultValue={consumableData?.laboratoryId}
          data={laboratoriesArray}
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

export default EditMaterial