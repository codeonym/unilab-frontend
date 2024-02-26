import EditUser from "@dashboard/@admin/components/EditUser"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { FaUserPlus } from "react-icons/fa"
import { insertUserAction } from "@actions/usersActions"

function page() {
  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau utilisateur"}
        icon={<FaUserPlus />}
        description={"Ajouter des nouveaux utilisateurs facilement!"}
      />
      {/* Insert new user */}
      <EditUser
        formActionHandler={insertUserAction}
      />
    </section>
  )
}

export default page