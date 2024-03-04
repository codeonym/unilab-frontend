import {insertResourceAction} from "@actions/crudActions";
import {addNewLabMaterialOrderEndpoint} from "@config/endpoints/responsible/ordersEndPoints";
import {
    responsibleConsumablesOrderWrapperReverse,
    responsibleMaterialsOrderWrapperReverse
} from "@config/data-control/responsibleOrders";
import {addNewLabConsumableOrderEndPoint} from "@config/endpoints/responsible/labConsumablesEndPoints";

export const addNewLabMaterialOrder = async (formData) => {
    "use server"
    return await insertResourceAction(await responsibleMaterialsOrderWrapperReverse(formData),addNewLabMaterialOrderEndpoint)
}

export const addNewLabConsumableOrder = async (formData) => {
    "use server"
    return await insertResourceAction(formData,addNewLabConsumableOrderEndPoint)
}