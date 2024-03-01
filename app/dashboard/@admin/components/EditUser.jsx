"use client"
import { useState, useEffect, useRef } from "react"
import InputText from "@components/ui/InputText"
import InputDate from "@components/ui/InputDate"
import InputPhone from "@components/ui/InputPhone"
import InputPasswordGenerator from "@components/ui/InputPasswordGenerator"
import InputEmail from "@components/ui/InputEmail"
import InputNumber from "@components/ui/InputNumber"
import InputSelect from "@components/ui/InputSelect"
import InputSubmit from "@components/ui/InputSubmit"
import { userValidationSchema } from "@lib/inputValidation"
import { userResponsibilities } from "@config/data-control/user"
import { toast } from 'react-hot-toast'
import { redirect } from "next/navigation"
import {singleLinks} from "@config/admin/singleLinks";


function EditUser({ formActionHandler, userData }) {

  const [isValidFirstName, setIsValidFirstName] = useState(!!userData)
  const [isValidLastName, setIsValidLastName] = useState(!!userData)
  const [isValidEmail, setIsValidEmail] = useState(!!userData)
  const [isValidPassword, setIsValidPassword] = useState(!!userData)
  const [isValidCin, setIsValidCin] = useState(!!userData)
  const [isValidSomNumber, setIsValidSomNumber] = useState(!!userData)
  const [isValidAddress, setIsValidAddress] = useState(!!userData)
  const [isValidPhone, setIsValidPhone] = useState(!!userData)
  const [isValidDateOfBirth, setIsValidDateOfBirth] = useState(!!userData)
  const [isValidGrade, setIsValidGrade] = useState(!!userData)
  const [isValidResponsibility, setIsValidResponsibility] = useState(!!userData)
  const [isValidBankName, setIsValidBankName] = useState(!!userData)
  const [isValidBankAccountNumber, setIsValidBankAccount] = useState(!!userData)
  const [isValidCity, setIsValidCity] = useState(!!userData)
  const [isValidPostalCode, setIsValidPostalCode] = useState(!!userData)

  const [isValidForm, setIsValidForm] = useState(!!userData)

  const formRef = useRef(null)

  useEffect(() => {
    const res = isValidFirstName
      && isValidLastName
      && isValidEmail
      && isValidPassword
      && isValidCin
      && isValidSomNumber
      && isValidAddress
      && isValidPhone
      && isValidDateOfBirth
      && isValidGrade
      && isValidResponsibility
      && isValidBankName
      && isValidBankAccountNumber
      && isValidCity
      && isValidPostalCode

    setIsValidForm(res)
  },
    [
      isValidFirstName,
      isValidLastName,
      isValidEmail,
      isValidPassword,
      isValidCin,
      isValidSomNumber,
      isValidAddress,
      isValidPhone,
      isValidDateOfBirth,
      isValidGrade,
      isValidResponsibility,
      isValidBankName,
      isValidBankAccountNumber,
      isValidCity,
      isValidPostalCode
    ])
  const formAction = async (formData) => {

    const jsonObject = {};
    formData.forEach((value, name) => {
      jsonObject[name] = value;
    })

    const res = await formActionHandler(jsonObject)
    if (res.ok) {
      toast.success(res.message)
        redirect(singleLinks.users.href + "/" + res?.data?.userId)
    }
    else
      toast.error(res.message)

  }
  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col items-center justify-center gap-4 mt-4 sm:grid-cols-2">

      {userData && (
        <input
          type={"hidden"}
          name={'id'}
          value={userData?.id}
        />
      )}

      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"firstName"}
          title={"Prenom"}
          placeholder={"John"}
          isRequired={true}
          setIsValidInput={setIsValidFirstName}
          inputValidationSchema={userValidationSchema.firstName}
          defaultValue={userData?.firstName}
        />
        <InputText
          name={"lastName"}
          title={"Nom"}
          placeholder={"Doe"}
          isRequired={true}
          setIsValidInput={setIsValidLastName}
          inputValidationSchema={userValidationSchema.lastName}
          defaultValue={userData?.lastName}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputEmail
          name={"email"}
          setIsValidEmail={setIsValidEmail}
          isRequired={true}
          setIsValidInput={setIsValidEmail}
          inputValidationSchema={userValidationSchema.email}
          defaultValue={userData?.email}
        />
        <InputPasswordGenerator
          name={"password"}
          isRequired={true}
          setIsValidInput={setIsValidPassword}
          inputValidationSchema={userValidationSchema.password}
          defaultValue={userData?.password}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"cin"}
          title={"Cin"}
          placeholder={"XX1234"}
          isRequired={true}
          setIsValidInput={setIsValidCin}
          inputValidationSchema={userValidationSchema.cin}
          defaultValue={userData?.cin}
        />
        <InputText
          name={"somNumber"}
          title={"SOM"}
          placeholder={"1234567"}
          isRequired={true}
          setIsValidInput={setIsValidSomNumber}
          inputValidationSchema={userValidationSchema.somNumber}
          defaultValue={userData?.somNumber}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"address"}
          title={"Adresse"}
          placeholder={'123 Main Street'}
          isRequired={true}
          setIsValidInput={setIsValidAddress}
          inputValidationSchema={userValidationSchema.address}
          defaultValue={userData?.address}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputDate
          name={"dateOfBirth"}
          title={"Né le"}
          isRequired={true}
          setIsValidInput={setIsValidDateOfBirth}
          inputValidationSchema={userValidationSchema.dateOfBirth}
          defaultValue={userData?.dateOfBirth}
        />
        <InputPhone
          name={"phone"}
          title={"Tel"}
          placeholder={'0612345687'}
          isRequired={true}
          setIsValidInput={setIsValidPhone}
          inputValidationSchema={userValidationSchema.phone}
          defaultValue={userData?.phone}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"grade"}
          title={"grade"}
          placeholder={'Directeur'}
          isRequired={true}
          setIsValidInput={setIsValidGrade}
          inputValidationSchema={userValidationSchema.grade}
          defaultValue={userData?.grade}
        />
        <InputSelect
          name={"responsibility"}
          title={"responsabilité"}
          options={userResponsibilities}
          isRequired={true}
          setIsValidInput={setIsValidResponsibility}
          inputValidationSchema={userValidationSchema.responsibility}
          defaultValue={userData?.responsibility}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"bankName"}
          title={"Banque"}
          placeholder={'mon Banque'}
          isRequired={true}
          setIsValidInput={setIsValidBankName}
          inputValidationSchema={userValidationSchema.bankName}
          defaultValue={userData?.bankName}
        />
        <InputNumber
          name={"bankAccountNumber"}
          title={"RIB"}
          placeholder={'5224-4458.....'}
          isRequired={true}
          setIsValidInput={setIsValidBankAccount}
          inputValidationSchema={userValidationSchema.bankAccountNumber}
          defaultValue={userData?.bankAccountNumber}
        />
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
        <InputText
          name={"city"}
          title={"Ville"}
          placeholder={'AnyTown'}
          isRequired={true}
          setIsValidInput={setIsValidCity}
          inputValidationSchema={userValidationSchema.city}
          defaultValue={userData?.city}
        />
        <InputNumber
          name={"postalCode"}
          title={"ZIP"}
          placeholder={'60000'}
          isRequired={true}
          setIsValidInput={setIsValidPostalCode}
          inputValidationSchema={userValidationSchema.postalCode}
          defaultValue={userData?.postalCode}
        />
      </div>
      <InputSubmit
        title={"Ajouter"}
        isValidForm={isValidForm}
      />
    </form>
  )
}

export default EditUser