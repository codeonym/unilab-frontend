import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { MdLaptop } from "react-icons/md"
import ProfileMaterial from '@dashboard/@admin/components/ProfileMaterial'

const getMaterialById = async (id) => ({
  "id": id,
  "inventoryNumber": "22568",
  "type": "PC bureau",
  "acquisitionDate": "2023-12-25",
  "supplierId": "2014",
  "laboratoryId": "3986",
  "responsiblePersonId": "4587695",
  "assignmentDate": "2024-01-30"
})

async function page({ params }) {

  const materialData = await getMaterialById(params.id)
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Matériel"}
        icon={<MdLaptop />}
        description={"Bienvenue dans la page du matériel."}
      />
      <ProfileMaterial
        materialData={materialData}
      />
    </section>
  )
}

export default page