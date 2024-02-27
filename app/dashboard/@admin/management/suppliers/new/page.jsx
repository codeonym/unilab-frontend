import EditSupplier from "@dashboard/@admin/components/EditSupplier"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { MdStore } from "react-icons/md"
import { insertSupplierAction } from "@actions/suppliersActions"
import { faker } from "@faker-js/faker"

const getRespNicknames = async () => {
  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.number.int({min: 100, max: 999}),
    nickName: faker.person.fullName(),
  }));

  return data
}

async function page() {

  const respArray = await getRespNicknames()
  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau fournisseur"}
        icon={<MdStore />}
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