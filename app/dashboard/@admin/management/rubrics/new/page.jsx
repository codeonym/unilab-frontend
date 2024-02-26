import EditRubric from "@dashboard/@admin/components/EditRubric"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { FaCoins } from "react-icons/fa";
import { insertRubricAction } from "@actions/rubricsActions"

function page() {
  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau rubric"}
        icon={<FaCoins />}
        description={"Ajouter des nouveaux rubriques facilement!"}
      />

      {/* Insert new rubric */}
      <EditRubric
        formActionHandler={insertRubricAction}
      />
    </section>
  )
}

export default page