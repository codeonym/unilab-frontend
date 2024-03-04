import React from 'react'
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
const materialsCards = () => {
  return (

    <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
           
            

            
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                
                <div className="mt-4">
                    <p className="text-xl font-semibold mb-2">Numéro d inventaire</p>
                    <div className="flex space-x-2 text-gray-400 text-sm">
                        
                        <MdOutlineInventory2  className="size-5"/>
                        <p>inv144</p>
                    </div>
                    <div className="flex space-x-2 text-gray-400 text-sm my-3">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>2 Days Left</p> 
                    </div>
                    <div className="border-t-2 "></div>

                    <div className="flex justify-between">
                        <div className="my-2">
                            <p className="font-semibold text-base mb-2">Résponsable</p>
                            <div className="flex space-x-2">
                               ibrahim oufkir
                            </div>
                        </div>
                        <div className="my-2">
                            <p className="font-semibold text-base mb-2">Type</p>
                            <div className="text-base text-gray-600 bg-slate-200 font-semibold rounded-md text-center">
                                <p>Pc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </div>
    </div>
)
}

export default materialsCards