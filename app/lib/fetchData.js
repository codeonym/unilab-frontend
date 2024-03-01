import {
    getAllLaboratoriesEndpoint,
    getLaboratoryByIdEndpoint,
} from "@config/endpoints/laboratoriesEndpoints";
import { withAuth } from "@lib/auth"
import {getAllSuppliersEndpoint, getSupplierByIdEndpoint} from "@config/endpoints/suppliersEndpoints";
import {getAllPersonsEndpoint, getPersonByIdEndpoint} from "@config/endpoints/usersEndpoints";
import {getAllMaterialsEndpoint, getMaterialByIdEndpoint} from "@config/endpoints/materialsEndpoints";
import {getAllConsumablesEndpoint, getConsumableByIdEndpoint} from "@config/endpoints/consumablesEndpoints";
import {
    getAllConsumablesOrdersEndpoint,
    getOrderByIdEndpoint
} from "@config/endpoints/ordersEndpoints";
import {getAllRubricsEndpoint, getRubricByIdEndpoint} from "@config/endpoints/rubricsEndpoints";
import {usersNickNamesWrapper, usersWrapper} from "@config/data-control/user";
import {laboratoriesWrapper} from "@config/data-control/laboratory";
import {suppliersWrapper} from "@config/data-control/supplier";
import {getAllAdminMaterialsOrdersEndpoint} from "@config/endpoints/adminMaterialsOrdersEndpoints";
import {getAllAdminConsumablesOrdersEndpoint} from "@config/endpoints/adminConsumablesOrdersEndpoints";
import {adminConsumablesOrdersWrapper, adminMaterialsOrdersWrapper} from "@config/data-control/adminOrders";

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

// FETCH ALL DATA
export const getRubrics = async () => {
    return await getResources(getAllRubricsEndpoint)
}
export const getLaboratories = async () => {
    return await getResources(getAllLaboratoriesEndpoint)
}
export const getSuppliers = async () => {
    return await getResources(getAllSuppliersEndpoint)
}

export const getUsers = async () => {
    return await getResources(getAllPersonsEndpoint)
}

export const getRespNicknames = async () => {
    const users = await getUsers()
    return await usersNickNamesWrapper(users)
}
export const getLaboratoriesNicknames = async () => {
    const laboratories = await getLaboratories()
    const data = await laboratoriesWrapper(laboratories)

    return data.map(laboratory => ({
        id: laboratory?.id,
        nickName: laboratory?.name
    }))
}
export const getSuppliersNicknames = async () => {
    const suppliers = await getSuppliers()
    const data = await suppliersWrapper(suppliers)

    return data.map(supplier => ({
        id: supplier?.id,
        nickName: supplier?.name
    }))
}

export const getMaterials = async () => {
    return await getResources(getAllMaterialsEndpoint)
}


export const getConsumables = async () => {
    return await getResources(getAllConsumablesEndpoint)
}

export const getAdminMaterialsOrders = async () => {
    return await getResources(getAllAdminMaterialsOrdersEndpoint)
}

export const getAdminConsumablesOrders = async () => {
    return await getResources(getAllAdminConsumablesOrdersEndpoint)
}

export const getAdminPendingOrders = async () => {
    try {
        const consumables = await adminConsumablesOrdersWrapper(await getAdminConsumablesOrders())
        const materials = await adminMaterialsOrdersWrapper(await getAdminMaterialsOrders())
        return [... consumables, ...materials]?.filter(order => order?.approvalStatus === "PENDING")
    }catch (err) {
        console.error(err)
    }
    return null
}

// FETCH DATA BY ID
export const getRubricById = async (id) => {
    return await getResources(getRubricByIdEndpoint + id)
}
export const getLaboratoryById = async (id) => {
    return await getResources(getLaboratoryByIdEndpoint + id)
}
export const getSupplierById = async (id) => {
    return await getResources(getSupplierByIdEndpoint + id)
}
export const getUserById = async (id) => {
    return await getResources(getPersonByIdEndpoint + id)
}
export const getMaterialById = async (id) => {
    return await getResources(getMaterialByIdEndpoint + id)
}
export const getConsumableById = async (id) => {
    return await getResources(getConsumableByIdEndpoint + id)
}
export const getPendingOrderById = async (id) => {
    return await getResources(getOrderByIdEndpoint + id)
}