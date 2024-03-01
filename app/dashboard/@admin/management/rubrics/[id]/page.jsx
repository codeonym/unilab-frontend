import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import ProfileRubric from '@dashboard/@admin/components/ProfileRubric'
import {getRubricById} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";
import {rubricWrapper} from "@config/data-control/rubric";

async function page({ params }) {

  const rubricData = await rubricWrapper(await getRubricById(params.id))
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Rubrique"}
        icon={singleLinks.rubrics.icon}
        description={"Bienvenue dans la page du rubrique."}
      />
      <ProfileRubric
        rubricData={rubricData}
      />
    </section>
  )
}

export default page