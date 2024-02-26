import EditRubric from "@dashboard/@admin/components/EditRubric"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { FaCoins } from "react-icons/fa";
import { updateRubricAction } from "@actions/rubricsActions"

const getRubricById = async (id) => ({
  "id": id,
  "code": "785422",
  "designation": "desktops and monitors",
  "allocatedAmount": "53000.500",
  "engagedAmount": "10000.522",
})

async function page({ params }) {

  const rubricData = await getRubricById(params.id)

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à rubric"}
        icon={<FaCoins />}
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