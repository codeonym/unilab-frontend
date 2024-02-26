"use client"
import { useState, useEffect, useRef } from "react"
import InputText from "@components/ui/InputText"
import InputPhone from "@components/ui/InputPhone"
import InputEmail from "@components/ui/InputEmail"
import InputNumber from "@components/ui/InputNumber"
import InputSubmit from "@components/ui/InputSubmit"
import InputSearch from "@components/ui/inputSearch"
import { supplierValidationSchema } from "@lib/inputValidation"
import { toast } from 'react-hot-toast'

function EditSupplier({ formActionHandler, supplierData, respArray }) {

  const [isValidName, setIsValidName] = useState(!!supplierData)
  const [isValidEmail, setIsValidEmail] = useState(!!supplierData)
  const [isValidAddress, setIsValidAddress] = useState(!!supplierData)
  const [isValidPhone, setIsValidPhone] = useState(!!supplierData)
  const [isValidBankName, setIsValidBankName] = useState(!!supplierData)
  const [isValidRIB, setIsValidRIB] = useState(!!supplierData)
  const [isValidFax, setIsValidFax] = useState(!!supplierData)
  const [isValidWebsite, setIsValidWebsite] = useState(true)

  const [isValidForm, setIsValidForm] = useState(!!supplierData)

  const formRef = useRef(null)

  useEffect(() => {
    const res = isValidName
      && isValidEmail
      && isValidAddress
      && isValidPhone
      && isValidBankName
      && isValidRIB
      && isValidFax
      && isValidWebsite

    setIsValidForm(res)
  },
    [
      isValidName,
      isValidEmail,
      isValidAddress,
      isValidPhone,
      isValidBankName,
      isValidRIB,
      isValidFax,
      isValidWebsite,
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

      {supplierData && (
        <input
          type={"hidden"}
          name={'id'}
          value={supplierData?.id}
        />
      )}

      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"name"}
          title={"Nom"}
          placeholder={"Pencil Inc"}
          isRequired={true}
          setIsValidInput={setIsValidName}
          inputValidationSchema={supplierValidationSchema.name}
          defaultValue={supplierData?.name}
        />
        <InputText
          name={"address"}
          title={"Adresse"}
          placeholder={"123 Main Street"}
          isRequired={true}
          setIsValidInput={setIsValidAddress}
          inputValidationSchema={supplierValidationSchema.address}
          defaultValue={supplierData?.address}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputEmail
          name={"email"}
          setIsValidEmail={setIsValidEmail}
          isRequired={true}
          setIsValidInput={setIsValidEmail}
          inputValidationSchema={supplierValidationSchema.email}
          defaultValue={supplierData?.email}
        />
        <InputText
          name={"website"}
          title={"Siteweb"}
          placeholder={"www.example.com"}
          isRequired={false}
          setIsValidInput={setIsValidWebsite}
          inputValidationSchema={supplierValidationSchema.website}
          defaultValue={supplierData?.website}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputPhone
          name={"phone"}
          title={"Tel"}
          placeholder={'0612345687'}
          isRequired={true}
          setIsValidInput={setIsValidPhone}
          inputValidationSchema={supplierValidationSchema.phone}
          defaultValue={supplierData?.phone}
        />
        <InputPhone
          name={"fax"}
          title={"Fax"}
          placeholder={'0512345687'}
          isRequired={true}
          setIsValidInput={setIsValidFax}
          inputValidationSchema={supplierValidationSchema.phone}
          defaultValue={supplierData?.fax}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"bankName"}
          title={"Banque"}
          placeholder={'mon Banque'}
          isRequired={true}
          setIsValidInput={setIsValidBankName}
          inputValidationSchema={supplierValidationSchema.bankName}
          defaultValue={supplierData?.bankName}
        />
        <InputNumber
          name={"rib"}
          title={"RIB"}
          placeholder={'5224 4458.....'}
          isRequired={true}
          setIsValidInput={setIsValidRIB}
          inputValidationSchema={supplierValidationSchema.rib}
          defaultValue={supplierData?.rib}
        />
      </div>
      <InputSearch
        title={"Resp"}
        name={"responsibleId"}
        placeholder={'Chercher par id, nom complete...'}
        isRequired={false}
        defaultValue={supplierData?.responsibleId}
        data={respArray}
      />
      <InputSubmit
        name={"submit"}
        title={"Ajouter"}
        isValidForm={isValidForm}
      />
    </form>
  )
}

export default EditSupplier