import EditUser from "@dashboard/@admin/components/EditUser"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { updateUserAction } from "@actions/usersActions"
import {getUserById} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";
import {userWrapper} from "@config/data-control/user";


async function page({params}) {

  const userData = await userWrapper(await getUserById(params.id))

  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Mettre à l'utilisateur"}
        icon={singleLinks.users.icon}
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