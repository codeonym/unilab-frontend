import EditSupplier from "@dashboard/@admin/components/EditSupplier"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { MdStore } from "react-icons/md"
import { updateSupplierAction } from "@actions/suppliersActions"
import { faker } from "@faker-js/faker"

const getRespNicknames = async () => {
  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.number.int({ min: 100, max: 999 }),
    nickName: faker.person.fullName(),
  }));

  return data
}

const getSupplierById = async (id) => {
  return {
    id: id,
    name: "tete",
    address: "123 ggg",
    email: "tete@gmail.com",
    website: "",
    tel: "0612359687",
    fax: "0542365986",
    bankName: "Dell Inc",
    rib: "123456789012345678901234",
    responsibleId: "758"
  }
}

async function page({ params }) {

  const supplierData = await getSupplierById(params.id)
  const respArray = await getRespNicknames()

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à jour fournisseur"}
        icon={<MdStore />}
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