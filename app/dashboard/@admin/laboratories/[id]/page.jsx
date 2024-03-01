import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { singleLinks } from '@config/admin/singleLinks'
import ProfileLaboratory from '@dashboard/@admin/components/ProfileLaboratory'
import {laboratoryWrapper} from "@config/data-control/laboratory";
import {getLaboratoryById} from "@lib/fetchData";

async function page({ params }) {

  const laboratoryData = await laboratoryWrapper(await getLaboratoryById(params.id))
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