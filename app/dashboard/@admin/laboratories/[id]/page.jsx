import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { singleLinks } from '@config/admin/singleLinks'
import ProfileLaboratory from '@dashboard/@admin/components/ProfileLaboratory'

const getLaboratoryById = async (id) => ({
  "id": id,
  "name": "LaRI",
  "responsiblePersonId": "4587",
  "deputyPersonId": "41125",
})

async function page({ params }) {

  const laboratoryData = await getLaboratoryById(params.id)
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Laboratoire"}
        icon={singleLinks.laboratories.icon}
        description={"Bienvenue dans la page du laboratoire."}
      />
      <ProfileLaboratory
        laboratoryData={laboratoryData}
      />
    </section>
  )
}

export default page