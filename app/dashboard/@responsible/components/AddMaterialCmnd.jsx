"use client"
import React from 'react'
import {toast} from "react-hot-toast";

const AddMaterialCmnd = ({isVisible, onClose,materials,formActionHandler, labId}) => {

    const formAction = async (formData) => {
        const jsonObject = {};
        formData.forEach((value, name) => {
            jsonObject[name] = value;
        })
        jsonObject["labId"] = labId
        const res = await formActionHandler(jsonObject)
        if (res.ok) {
            toast.success(res.message)
        }
        else
            toast.error(res.message)

    }
        if(!isVisible) return null;
        return (
            
            

            <div className="fixed inset-0 bg-gray-900/20 z-50 flex  h-screen items-center justify-center">
                <form className="m-2 inline-flex rounded-xl bg-gray-100 sm:p-2 z-50" action={formAction}>
                    <div className="flex flex-col rounded-lg bg-white sm:w-96">
                    <div className="flex w-full justify-between self-start px-8 py-4">
                        <h2 className="text-lg font-medium text-gray-700">Demande</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={() => onClose()}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <hr />
                    <div className="flex w-full flex-col px-8">
                        <p className="mt-4 mb-2 text-sm font-medium">Demander un Matériel</p>
                        <p className="mb-2 text-gray-400">Vous pouvez sélectionner un matériel.</p>
                        <div className="mb-4 flex justify-between">
                            <select name={"materialId"} className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Matériel</option>
                                {materials?.map((material) => {
                                    return <option key={material?.nickname} value={material?.id}>{material?.nickName}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="flex w-full flex-col px-8 pt-4 pb-4">
                        
                        <button className="my-2 rounded-md bg-blue-600 py-2 font-medium text-white" >Demander</button>
                    </div>
                    </div>
                </form>
                </div>

            
        ) 
}

export default AddMaterialCmnd