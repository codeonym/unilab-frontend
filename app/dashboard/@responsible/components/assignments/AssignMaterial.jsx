"use client"
import { useState, useEffect, useRef } from "react"
import InputSubmit from "@components/ui/InputSubmit"
import InputSearch from "@components/ui/inputSearch"
import { toast } from 'react-hot-toast'

function AssignMaterial({ formActionHandler, materialData, usersArray, materialsArray }) {

    const formRef = useRef(null)


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
        className="flex flex-col items-center justify-center gap-12 mt-4 sm:grid-cols-2">

        {materialData && (
            <input
            type={"hidden"}
            name={'id'}
            value={materialData?.id}
            />
        )}

        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
            <InputSearch
            title={"Matériel"}
            name={"materielId"}
            placeholder={'Chercher par id, type ...'}
            isRequired={true}
            defaultValue={materialData?.materialId}
            data={materialsArray}
            />
            <InputSearch
            title={"Person"}
            name={"userId"}
            placeholder={'Chercher par id, nom ...'}
            isRequired={true}
            defaultValue={materialData?.userId}
            data={usersArray}
            />
        </div>

        <InputSubmit
            name={"submit"}
            title={"Ajouter"}
            isValidForm={true}
        />
        </form>
    )
}

export default AssignMaterial