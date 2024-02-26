import React from 'react'

const AddMaterialCmnd = ({isVisible, onClose}) => {
        const materials = [
            {
            id:"1",
            type:"type1"
            },
            {
            id:"2",
            type:"type1"
            },
            {
            id:"3",
            type:"type1"
            },
            {
            id:"4",
            type:"type1",
            id:"5"
            },
            {
            type:"type1",
            id:"6",
            }
        ]
        if(!isVisible) return null;
        return (
            
            

            <div class="fixed inset-0 bg-gray-900/20 z-50 flex  h-screen items-center justify-center">
                <div class="m-2 inline-flex rounded-xl bg-gray-100 sm:p-2 z-50">
                    <div class="flex flex-col rounded-lg bg-white sm:w-96">
                    <div class="flex w-full justify-between self-start px-8 py-4">
                        <h2 class="text-lg font-medium text-gray-700">Demande</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={() => onClose()}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <hr />
                    <div class="flex w-full flex-col px-8">
                        <p class="mt-4 mb-2 text-sm font-medium">Demander un Matériel</p>
                        <p class="mb-2 text-gray-400">Vous pouvez sélectionner un matériel.</p>
                        <div class="mb-4 flex justify-between">
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Matériel</option>
                                {materials.map((c) => {
                                    return <option key={c.id}>{c.type}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div class="flex w-full flex-col px-8 pt-4 pb-4">
                        
                        <button class="my-2 rounded-md bg-blue-600 py-2 font-medium text-white" onClick={() => onClose()}>Demander</button>
                    </div>
                    </div>
                </div>
                </div>

            
        ) 
}

export default AddMaterialCmnd