import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { singleLinks} from "@config/admin/singleLinks";
import ProfileConsumable from '@dashboard/@admin/components/ProfileConsumable'
import { getConsumableById} from "@lib/fetchData";
import {consumableWrapper} from "@config/data-control/consumable";


async function page({ params }) {

  const consumableData = await consumableWrapper(await getConsumableById(params.id))
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Consommable"}
        icon={singleLinks.consumables.icon}
        description={"Bienvenue dans la page du consommable."}
      />
      <ProfileConsumable
        consumableData={consumableData}
      />
    </section>
  )
}

export default page