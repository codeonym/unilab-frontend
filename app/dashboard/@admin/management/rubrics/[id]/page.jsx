import React from 'react'
import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import { FaCoins } from "react-icons/fa";
import ProfileRubric from '@dashboard/@admin/components/ProfileRubric'

const getRubricById = async (id) => ({
  "id": id,
  "code": "1785469",
  "designation": "Management et gestion",
  "allocatedAmount": "600000",
  "engagedAmount": "24500",
})

async function page({ params }) {

  const rubricData = await getRubricById(params.id)
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Rubrique"}
        icon={<FaCoins />}
        description={"Bienvenue dans la page du rubrique."}
      />
      <ProfileRubric
        rubricData={rubricData}
      />
    </section>
  )
}

export default page