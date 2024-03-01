"use client"
import InputEmail from '@components/ui/InputEmail'
import InputPassword from '@components/ui/InputPassword'
import InputSubmit from '@components/ui/InputSubmit'
import React, { useState, useEffect } from 'react'
import { loginValidationSchema } from '@lib/inputValidation'
import { toast } from 'react-hot-toast'
import { signIn} from "next-auth/react";
import { redirect} from "next/navigation"

function LoginForm({ loginAction }) {
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

  const [isValidForm, setIsValidForm] = useState(false)
  
  useEffect(() => {
    const isValid = isValidPassword && isValidEmail
    setIsValidForm(isValid)
  }, [isValidPassword, isValidEmail])
  return (
    <form
      action={(async (formData) => {

        const jsonObject = {};
        formData.forEach((value, name) => {
          jsonObject[name] = value;
        })
          const res = await signIn("credentials", {
              email: jsonObject.username,
              password: jsonObject.password,
              redirect: false
          })

        if (res) {
          toast.success("Login successful")
            redirect("/dashboard", "replace")
        } else {
          toast.error("Failed to login")
        }
      })}
      className="
      flex flex-col gap-2 p-16
      shadow-xl shadow-base-300
      ">
      <h1
        className='
        text-center font-extrabold text-2xl pb-6 pt-4
        '
      >
        S&apos;authentifier!
      </h1>
      <InputEmail
        name={'email'}
        setIsValidInput={setIsValidEmail}
        isRequired={true}
        inputValidationSchema={loginValidationSchema?.email}
      />
      <InputPassword
        name={"password"}
        setIsValidInput={setIsValidPassword}
        inputValidationSchema={loginValidationSchema?.password}
      />
      <InputSubmit
        name={"submit"}
        title={"Authentifier"}
        isValidForm={isValidForm}
      />
    </form>
  )
}

export default LoginForm