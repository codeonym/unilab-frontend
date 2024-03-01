import EditSupplier from "@dashboard/@admin/components/EditSupplier"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { insertSupplierAction } from "@actions/suppliersActions"
import {getRespNicknames} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";

async function page() {

  const respArray = await getRespNicknames()
  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau fournisseur"}
        icon={singleLinks.suppliers.icon}
        description={"Ajouter des nouveaux fournisseurs facilement!"}
      />
      {/* Insert new supplier */}
      <EditSupplier
        formActionHandler={insertSupplierAction}
        respArray={respArray}
      />
    </section>
  )
}

export default page