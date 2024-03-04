"use server"
import { patchResourceAction} from "@actions/crudActions";
import {updateAdminConsumableOrderStatusEndpoint} from "@config/endpoints/adminConsumablesOrdersEndpoints";
import {updateAdminMaterialOrderStatusEndpoint} from "@config/endpoints/adminMaterialsOrdersEndpoints";
import {
    updateConsumableOrderStatusEndPoint,
    updateMaterialOrderStatusEndPoint
} from "@config/endpoints/responsible/ordersEndPoints";

export const orderApprovalAction = async(formData) => {
    let endpoint = null
    switch(formData?.type) {
        case "consommable" || "consumable":
            endpoint = updateAdminConsumableOrderStatusEndpoint
            break
        case "matériel" || "material":
            endpoint = updateAdminMaterialOrderStatusEndpoint
    }
    return await  patchResourceAction(`${endpoint}${formData.id}/${formData.status}`)
}

export const orderResponsibleApprovalAction = async(formData) => {
    let endpoint = null
    switch(formData?.type) {
        case "consommable" || "consumable":
            endpoint = updateConsumableOrderStatusEndPoint
            break
        case "matériel" || "material":
            endpoint = updateMaterialOrderStatusEndPoint
    }
    return await  patchResourceAction(`${endpoint}${formData.id}/${formData.status}`)
}