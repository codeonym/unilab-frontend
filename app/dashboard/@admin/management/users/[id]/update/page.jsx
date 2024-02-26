import EditUser from "@dashboard/@admin/components/EditUser"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { FaUserEdit } from "react-icons/fa"
import { updateUserAction } from "@actions/usersActions"

const getUserById = async (id) => ({
  "id": id,
  "firstName": "aaaa",
  "lastName": "aaaa",
  "email": "admin@gmail.com",
  "password": "aaaaaaaaaaa",
  "cin": "aaaaaa444",
  "somNumber": "1234567",
  "address": "dererfer",
  "dateOfBirth": "2024-02-01",
  "phone": "0658965896",
  "grade": "dddd",
  "responsibility": "user",
  "bankName": "dddd",
  "bankAccountNumber": "065896589606589658967894",
  "city": "dddd",
  "postalCode": "7845",
  "submit": "Ajouter"
})

async function page({params}) {

  const userData = await getUserById(params.id)

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à l'utilisateur"}
        icon={<FaUserEdit />}
        description={"Mettre à jour les données de votre utilisateurs facilement!"}
      />
      {/* update existing user */}
      <EditUser
        formActionHandler={updateUserAction}
        userData={userData}
      />
    </section>
  )
}

export default page