import {insertResourceAction} from "@actions/crudActions";

import {
    addNewLUserConsumableOrderEndpoint,
    addNewLUserMaterialOrderEndpoint, addNewUserConsumableOrderEndpoint
} from "@config/endpoints/user/ordersEndPoints";
import {userConsumableOrderWrapperReverse, userMaterialsOrderWrapperReverse} from "@config/data-control/userOrders";

export const addNewUserMaterialOrder = async (formData) => {
    "use server"
    return await insertResourceAction(await userMaterialsOrderWrapperReverse(formData),addNewLUserMaterialOrderEndpoint)
}

export const addNewUserConsumableOrder = async (formData) => {
    "use server"
    return await insertResourceAction(await userConsumableOrderWrapperReverse(formData),addNewUserConsumableOrderEndpoint)
}