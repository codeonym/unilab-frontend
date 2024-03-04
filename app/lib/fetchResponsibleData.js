import { withAuth } from "@lib/auth"
import {getPersonByIdEndpoint, getPersonsByLaboratoryIdEndpoint} from "@config/endpoints/responsible/userEndPoints"
import { usersNickNamesWrapper } from "@config/data-control/user"
import {
    getAllMaterialsResponsibleEndpoint,
    getLaboratoryMaterialsEndpoint
} from "@config/endpoints/responsible/labMaterialsEndPoint"
import {
    getLabConsumablesOrdersByLabIdEndpoint,
    getLabMaterialsOrdersByLabIdEndpoint,
    getUsersConsumablesOrdersEndpoint, getUsersMaterialOrdersEndpoint
} from "@config/endpoints/responsible/ordersEndPoints"
import { materialsNickNameWrapper } from "@config/data-control/labMaterial"
import { adminConsumablesOrdersWrapper, adminMaterialsOrdersWrapper } from "@config/data-control/adminOrders"
import {
    responsibleConsumablesOrdersWrapper,
    responsibleMaterialsOrdersWrapper
} from "@config/data-control/responsibleOrders";
import {
    getAllConsumablesResponsibleEndpoint,
    getAllLaboratoryConsumablesEndPoint
} from "@config/endpoints/responsible/labConsumablesEndPoints";

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

export const getAllMaterials = async () => {
    return await getResources(getAllMaterialsResponsibleEndpoint)
}
export const getLaboratoryMaterials = async (id) => {
    return await getResources(getLaboratoryMaterialsEndpoint + id)
}
export const getAllConsumables = async () => {
    return await getResources( getAllConsumablesResponsibleEndpoint )
}

export const getLaboratoryConsumables = async (id) => {
    return await getResources(getAllLaboratoryConsumablesEndPoint + id)
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
    return await getResources(getUsersMaterialOrdersEndpoint + id)

}

export const getResponsibleConsumablesOrders = async (id) => {
    return await getResources(getUsersConsumablesOrdersEndpoint + id)
}

export const getResponsiblePendingOrders = async (id) => {
    try {
        const consumables = await responsibleConsumablesOrdersWrapper(await getResponsibleConsumablesOrders(id))
        const materials = await responsibleMaterialsOrdersWrapper(await getResponsibleMaterialsOrders(id))
        return materials && consumables ? [... consumables, ...materials]?.filter(order => order?.approvalStatus === "PENDING"): null

    }catch (err) {
        console.error(err)
    }
    return null
}
