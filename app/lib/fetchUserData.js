import {withAuth} from "@lib/auth";
import {getUserConsumablesOrdersEndpoint, getUserMaterialOrdersEndPoint} from "@config/endpoints/user/ordersEndPoints";
import {getUserLaboratoryMaterialsEndpoint, getUserMaterialsEndpoint} from "@config/endpoints/user/materialsEndPoints";
import {getPersonByIdEndpoint} from "@config/endpoints/user/userEndPoints";
import {getLabConsumablesOrdersByLabIdEndpoint} from "@config/endpoints/responsible/ordersEndPoints";
import {getUserLaboratoryConsumablesEndpoint} from "@config/endpoints/user/consumablesEndPoints";

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

export const getUserMaterialsOrders = async (id) => {
    return await getResources(getUserMaterialOrdersEndPoint + id)

}

export const getUserConsumablesOrders = async (id) =>{
    return await getResources(getUserConsumablesOrdersEndpoint + id)
}

export const getUserLaboratoryMaterials = async (id) => {
    return await getResources(getUserLaboratoryMaterialsEndpoint + id)
}

export const getUserLaboratoryConsumables = async (id) => {
    return await getResources(getUserLaboratoryConsumablesEndpoint + id)
}

export const getUserMaterials = async (id) => {
    return await getResources(getUserMaterialsEndpoint + id)
}
export const getUserDetails = async (id) =>{
    return await getResources(getPersonByIdEndpoint + id)
}