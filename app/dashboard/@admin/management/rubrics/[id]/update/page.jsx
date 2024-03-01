import EditRubric from "@dashboard/@admin/components/EditRubric"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { updateRubricAction } from "@actions/rubricsActions"
import {getRubricById} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";
import {rubricWrapper} from "@config/data-control/rubric";


async function page({ params }) {

  const rubricData = await rubricWrapper(await getRubricById(params.id))

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à jour rubrique"}
        icon={singleLinks.rubrics.icon}
        description={"Mettre à jour vos rubriques facilement!"}
      />

      {/* update existing rubric */}
      <EditRubric
        formActionHandler={updateRubricAction}
        rubricData={rubricData}
      />
    </section>
  )
}

export default page