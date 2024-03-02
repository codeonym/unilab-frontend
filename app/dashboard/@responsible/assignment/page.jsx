import AssignMaterial from "../components/assignments/AssignMaterial"
import SectionHeader from "../components/assignments/SectionHeader"
import { IoDesktop } from "react-icons/io5"
import { assignMaterialAction } from "@actions/responsible/assignmentActions"
import { faker } from "@faker-js/faker"
import {getUserDetails,getLaboratoryUsersNickNames,getMaterialsNickNames} from "@lib/fetchResponsibleData"

import {withAuth} from "@lib/auth"
async function page() {

    const { user} = await withAuth()
    const userData = await getUserDetails(user?.id)

    const usersArray = await getLaboratoryUsersNickNames(userData.laboratoryId)
    const materialsArray = await getMaterialsNickNames(userData.laboratoryId)   

    return (
        <section className="p-4 container mx-auto mt-12">
            <SectionHeader
            title={"Affectation"}
            icon={<IoDesktop />}
            description={"Affecter un matériel à un utilisateur facilement !"}
            />

            <AssignMaterial
            formActionHandler={assignMaterialAction}
            usersArray={usersArray}
            materialsArray={materialsArray}
            />
        </section>
    )
}

export default page