import EditUser from "@dashboard/@admin/components/EditUser"
import SectionHeader from "@dashboard/@admin/components/SectionHeader"
import { insertUserAction } from "@actions/usersActions"
import {singleLinks} from "@config/admin/singleLinks";

function page() {
  return (
    <section className="p-4 container mx-auto">
      <SectionHeader
        title={"Nouveau utilisateur"}
        icon={singleLinks.users.icon}
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