import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { FaUserCircle } from "react-icons/fa"
import ProfileConsumable from '@dashboard/@admin/components/ProfileConsumable'

const getConsumableById = async (id) => ({
  "id": id,
  "type": "Clé usb",
  "quantity": "214",
  "supplierId": "2256",
  "laboratoryId": "4587"
})

async function page({ params }) {

  const consumableData = await getConsumableById(params.id)
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Consommable"}
        icon={<FaUserCircle />}
        description={"Bienvenue dans la page du consommable."}
      />
      <ProfileConsumable
        consumableData={consumableData}
      />
    </section>
  )
}

export default page