import EditConsumable from "@dashboard/@admin/components/EditConsumable"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { PiToolboxFill } from "react-icons/pi"
import { insertConsumableAction } from "@actions/consumablesActions"
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

async function page() {

  const laboratoriesArray = await getLaboratoriesNicknames()
  const suppliersArray = await getSuppliersNicknames()

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau consommable"}
        icon={<PiToolboxFill />}
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