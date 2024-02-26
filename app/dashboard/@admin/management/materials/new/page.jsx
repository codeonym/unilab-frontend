import EditMaterial from "@dashboard/@admin/components/EditMaterial"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { MdLaptop } from "react-icons/md"
import { insertMaterialAction } from "@actions/materialsActions"
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
        title={"Nouveau matériel"}
        icon={<MdLaptop />}
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