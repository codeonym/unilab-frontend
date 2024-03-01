import EditMaterial from "@dashboard/@admin/components/EditMaterial"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { insertMaterialAction } from "@actions/materialsActions"
import {getLaboratoriesNicknames, getSuppliersNicknames} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";

async function page() {

  const laboratoriesArray = await getLaboratoriesNicknames()
  const suppliersArray = await getSuppliersNicknames()

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau matériel"}
        icon={singleLinks.materials.icon}
        description={"Ajouter des nouveaux matériels facilement!"}
      />
      {/* Insert new material */}
      <EditMaterial
        formActionHandler={insertMaterialAction}
        laboratoriesArray={laboratoriesArray}
        suppliersArray={suppliersArray}
      />
    </section>
  )
}

export default page