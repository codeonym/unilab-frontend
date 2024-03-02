import { withAuth } from "@lib/auth"
import {getPersonByIdEndpoint, getPersonsByLaboratoryIdEndpoint} from "@config/endpoints/responsible/userEndPoints"
import { usersNickNamesWrapper } from "@config/data-control/user"
import {getAllMaterialsEndpoint} from "@config/endpoints/responsible/labMaterialsEndPoint"
import {
    getLabConsumablesOrdersByLabIdEndpoint,
    getLabMaterialsOrdersByLabIdEndpoint,
    getUsersConsumablesOrdersEndpoint, getUsersMaterialOrdersEndpoint
} from "@config/endpoints/responsible/ordersEndPoints"
import { materialsNickNameWrapper } from "@config/data-control/labMaterial"
import { adminConsumablesOrdersWrapper, adminMaterialsOrdersWrapper } from "@config/data-control/adminOrders"

// Definitions
export const getResources = async (getResourcesEndpoint) => {
    try {
        const {accessToken} = await withAuth()
        const res = await fetch(getResourcesEndpoint, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            }
        })
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data
    } catch (error) {
        console.error("Error  fetching" + getResourcesEndpoint + ":", error);
        return null;
    }
}

export const getUserDetails = async (id) =>{
    return await getResources(getPersonByIdEndpoint + id)
}

export const getLaboratoryMaterials = async (id) => {
    return await getResources(getAllMaterialsEndpoint + id)
}

export const getLabMaterialsOrders = async (id) =>{
    return await getResources(getLabMaterialsOrdersByLabIdEndpoint + id)
}

export const getLabConsumablesOrders = async (id) =>{
    return await getResources(getLabConsumablesOrdersByLabIdEndpoint + id)
}
export const getLaboratoryUsers = async (id) =>{
    return await getResources(getPersonsByLaboratoryIdEndpoint + id)
}

export const getLaboratoryUsersNickNames  = async (id) => {
    const users = await getLaboratoryUsers(id)

    const data = await usersNickNamesWrapper(users)
    console.log(data);
    return data
}

export const getMaterialsNickNames  = async (id) => {
    const materials = await getLaboratoryMaterials(id)
    return await materialsNickNameWrapper(materials)
}

export const getResponsibleMaterialsOrders = async (id) => {
    const data =  await getResources(getUsersMaterialOrdersEndpoint + id)
    console.log(data);
    return data
}

export const getResponsibleConsumablesOrders = async (id) => {
    const data =  await getResources(getUsersConsumablesOrdersEndpoint + id)
    return data
}

export const getResponsiblePendingOrders = async (id) => {
    try {
        const consumables = await adminConsumablesOrdersWrapper(await getResponsibleMaterialsOrders(id))
        const materials = await adminMaterialsOrdersWrapper(await getResponsibleConsumablesOrders(id))
        return [... consumables, ...materials]?.filter(order => order?.approvalStatus === "PENDING")
    }catch (err) {
        console.log("ERROR is hapening at get Responsible data #################################################################################################")
        console.error(err)
    }
    return null
}
