import EditConsumable from "@dashboard/@admin/components/EditConsumable"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import {singleLinks} from "@config/admin/singleLinks";
import { updateConsumableAction } from "@actions/consumablesActions"
import {getConsumableById, getLaboratoriesNicknames, getSuppliersNicknames} from "@lib/fetchData";
import {consumableWrapper} from "@config/data-control/consumable";

async function page({ params }) {

  const laboratoriesArray = await getLaboratoriesNicknames()
  const suppliersArray = await getSuppliersNicknames()
  const consumableData = await consumableWrapper(await getConsumableById(params.id))

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à jour consommable"}
        icon={singleLinks.consumables.icon}
        description={"Mettre à jour vos consommables facilement!"}
      />
      {/* Insert new material */}
      <EditConsumable
        formActionHandler={updateConsumableAction}
        laboratoriesArray={laboratoriesArray}
        suppliersArray={suppliersArray}
        consumableData={consumableData}
      />
    </section>
  )
}

export default page