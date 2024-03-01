import SectionHeader from '@dashboard/@admin/components/SectionHeader'
import ProfileUser from '@dashboard/@admin/components/ProfileUser'
import {getUserById} from "@lib/fetchData";
import {singleLinks} from "@config/admin/singleLinks";
import {userWrapper} from "@config/data-control/user";

async function page({ params }) {

  const userData = await userWrapper(await getUserById(params.id))
  return (
    <section
      className='p-4 container mx-auto'
    >
      <SectionHeader
        title={"Profile"}
        icon={singleLinks.users.icon}
        description={"Bienvenue dans la page du profile."}
      />
      <ProfileUser
        userData={userData}
      />
    </section>
  )
}

export default page