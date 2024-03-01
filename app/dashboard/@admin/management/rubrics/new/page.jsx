import EditRubric from "@dashboard/@admin/components/EditRubric"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { insertRubricAction } from "@actions/rubricsActions"
import {singleLinks} from "@config/admin/singleLinks";

function page() {
  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau rubrique"}
        icon={singleLinks.rubrics.icon}
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