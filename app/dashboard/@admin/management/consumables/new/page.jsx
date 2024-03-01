import EditConsumable from "@dashboard/@admin/components/EditConsumable"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { singleLinks} from "@config/admin/singleLinks";
import { insertConsumableAction } from "@actions/consumablesActions"
import {getLaboratoriesNicknames, getSuppliersNicknames} from "@lib/fetchData";

async function page() {

  const laboratoriesArray = await getLaboratoriesNicknames()
  const suppliersArray = await getSuppliersNicknames()

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau consommable"}
        icon={singleLinks.consumables.icon}
        description={"Ajouter des nouveaux consommables facilement!"}
      />
      {/* Insert new material */}
      <EditConsumable
        formActionHandler={insertConsumableAction}
        laboratoriesArray={laboratoriesArray}
        suppliersArray={suppliersArray}
      />
    </section>
  )
}

export default page