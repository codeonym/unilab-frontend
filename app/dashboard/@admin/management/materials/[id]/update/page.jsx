import EditMaterial from "@dashboard/@admin/components/EditMaterial"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { MdLaptop } from "react-icons/md"
import { updateMaterialAction } from "@actions/materialsActions"
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

const getMaterialById = async (id) => {

  return {
    id: id,
    type: faker.commerce.product(),
    acquisitionDate: faker.date.past().toISOString().slice(0, 10),
    inventoryNumber: faker.number.int({ min: 10000, max: 99999 }),
    laboratoryId: faker.number.int({ min: 100, max: 999 }),
    supplierId: faker.number.int({ min: 100, max: 999 }),
  }
}
async function page({ params }) {

  const laboratoriesArray = await getLaboratoriesNicknames()
  const suppliersArray = await getSuppliersNicknames()
  const materialData = await getMaterialById(params.id)

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à jour matériel"}
        icon={<MdLaptop />}
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