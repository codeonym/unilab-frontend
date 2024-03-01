import EditSupplier from "@dashboard/@admin/components/EditSupplier"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { updateSupplierAction } from "@actions/suppliersActions"
import {getRespNicknames, getSupplierById} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";
import {supplierWrapper} from "@config/data-control/supplier";


async function page({ params }) {

  const supplierData = await supplierWrapper(await getSupplierById(params.id))
  const respArray = await getRespNicknames()

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à jour fournisseur"}
        icon={singleLinks.suppliers.icon}
        description={"Mettre à jour vos fournisseurs facilement!"}
      />
      {/* Insert new supplier */}
      <EditSupplier
        formActionHandler={updateSupplierAction}
        respArray={respArray}
        supplierData={supplierData}
      />
    </section>
  )
}

export default page