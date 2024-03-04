import { baseUrl } from '@lib/constants'
export const getLabMaterialsOrdersByLabIdEndpoint = baseUrl + "/responsible/orders/materials/laboratories/"
export const getLabConsumablesOrdersByLabIdEndpoint = baseUrl + "/responsible/orders/consumables/laboratories/"
export const getUsersMaterialOrdersEndpoint = baseUrl + "/responsible/orders/materials/labId/"
export const getUsersConsumablesOrdersEndpoint = baseUrl + "/responsible/orders/consumables/labId/"

export const updateMaterialOrderStatusEndPoint = baseUrl + "/responsible/orders/materials/"

export const updateConsumableOrderStatusEndPoint = baseUrl + "/responsible/orders/consumables/"

export const addNewLabMaterialOrderEndpoint = baseUrl + "/responsible/orders/materials/laboratories"