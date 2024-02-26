"use client"
import { useState, useEffect, useRef } from "react"
import InputText from "@components/ui/InputText"
import InputNumber from "@components/ui/InputNumber"
import InputSubmit from "@components/ui/InputSubmit"
import InputSearch from "@components/ui/inputSearch"
import { materialValidationSchema } from "@lib/inputValidation"
import { toast } from 'react-hot-toast'
import InputDate from "@components/ui/InputDate"

function EditMaterial({ formActionHandler, materialData, laboratoriesArray, suppliersArray }) {

  const [isValidInventoryNumber, setIsValidInventoryNumber] = useState(!!materialData)
  const [isValidType, setIsValidType] = useState(!!materialData)
  const [isValidAcquisitionDate, setIsValidAcquisitionDate] = useState(!!materialData)

  const [isValidForm, setIsValidForm] = useState(!!materialData)

  const formRef = useRef(null)

  useEffect(() => {
    const res = isValidInventoryNumber
      && isValidType
      && isValidAcquisitionDate

    setIsValidForm(res)
  },
    [
      isValidInventoryNumber,
      isValidType,
      isValidAcquisitionDate,
    ])
  const formAction = async (formData) => {

    const jsonObject = {};
    formData.forEach((value, name) => {
      jsonObject[name] = value;
    })

    const res = await formActionHandler(jsonObject)
    if (res.ok) {
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

      {materialData && (
        <input
          type={"hidden"}
          name={'id'}
          value={materialData?.id}
        />
      )}

      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputNumber
          name={"inventoryNumber"}
          title={"N.inv"}
          placeholder={"12345"}
          isRequired={true}
          setIsValidInput={setIsValidInventoryNumber}
          inputValidationSchema={materialValidationSchema.inventoryNumber}
          defaultValue={materialData?.inventoryNumber}
        />
        <InputText
          name={"type"}
          title={"Type"}
          placeholder={"PC bureau"}
          isRequired={true}
          setIsValidInput={setIsValidType}
          inputValidationSchema={materialValidationSchema.type}
          defaultValue={materialData?.type}
        />
      </div>
      <InputDate
        name={"acquisitionDate"}
        title={"Acquis"}
        isRequired={true}
        setIsValidInput={setIsValidAcquisitionDate}
        inputValidationSchema={materialValidationSchema.acquisitionDate}
        defaultValue={materialData?.acquisitionDate}
      />
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputSearch
          title={"Fournisseur"}
          name={"supplierId"}
          placeholder={'Chercher par id, nom ...'}
          isRequired={false}
          defaultValue={materialData?.supplierId}
          data={suppliersArray}
        />
        <InputSearch
          title={"Laboratoire"}
          name={"laboratoryId"}
          placeholder={'Chercher par id, nom ...'}
          isRequired={false}
          defaultValue={materialData?.laboratoryId}
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