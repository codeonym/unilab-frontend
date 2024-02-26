import EditConsumable from "@dashboard/@admin/components/EditConsumable"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { PiToolboxFill } from "react-icons/pi"
import { updateConsumableAction } from "@actions/consumablesActions"
import { faker } from "@faker-js/faker"

const getLaboratoriesNicknames = async () => {

  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.number.int({ min: 100, max: 999 }),
    nickName: faker.company.name(),
  }));
  return data
}

const getSuppliersNicknames = async () => {

  // generate some dummy data for the table
  const data = [...new Array(45)].map(() => ({
    id: faker.number.int({ min: 100, max: 999 }),
    nickName: faker.company.name(),
  }));
  return data
}

const getConsumableById = async (id) => {

  return {
    id: id,
    type: faker.commerce.product(),
    quantity: faker.number.int({min:1, max: 999}),
    laboratoryId: faker.number.int({ min: 100, max: 999 }),
    supplierId: faker.number.int({ min: 100, max: 999 }),
  }
}
async function page({ params }) {

  const laboratoriesArray = await getLaboratoriesNicknames()
  const suppliersArray = await getSuppliersNicknames()
  const consumableData = await getConsumableById(params.id)

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à jour consommable"}
        icon={<PiToolboxFill />}
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