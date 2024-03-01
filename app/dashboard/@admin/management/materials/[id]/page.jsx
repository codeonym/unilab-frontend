import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import ProfileMaterial from '@dashboard/@admin/components/ProfileMaterial'
import {getMaterialById} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";
import {materialWrapper} from "@config/data-control/material";


async function page({ params }) {

  const materialData = await materialWrapper(await getMaterialById(params.id))
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Matériel"}
        icon={singleLinks.materials.icon}
        description={"Bienvenue dans la page du matériel."}
      />
      <ProfileMaterial
        materialData={materialData}
      />
    </section>
  )
}

export default page