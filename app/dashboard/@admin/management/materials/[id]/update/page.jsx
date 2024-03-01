import EditMaterial from "@dashboard/@admin/components/EditMaterial"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { updateMaterialAction } from "@actions/materialsActions"
import {getLaboratoriesNicknames, getMaterialById, getSuppliersNicknames} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";
import {materialWrapper} from "@config/data-control/material";

async function page({ params }) {

  const laboratoriesArray = await getLaboratoriesNicknames()
  const suppliersArray = await getSuppliersNicknames()
  const materialData = await materialWrapper(await getMaterialById(params.id))

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à jour matériel"}
        icon={singleLinks.materials.icon}
        description={"Mettre à jour vos matériels facilement!"}
      />
      {/* Insert new material */}
      <EditMaterial
        formActionHandler={updateMaterialAction}
        laboratoriesArray={laboratoriesArray}
        suppliersArray={suppliersArray}
        materialData={materialData}
      />
    </section>
  )
}

export default page