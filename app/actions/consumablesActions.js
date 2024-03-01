"use server"
import {deleteResourceAction, insertResourceAction, updateResourceAction} from "@actions/crudActions";
import {
  deleteConsumableEndpoint,
  insertConsumableEndpoint,
  updateConsumableEndpoint
} from "@config/endpoints/consumablesEndpoints";
import {consumableWrapperReverse} from "@config/data-control/consumable";

export const insertConsumableAction = async (formData) => {
  const user = await consumableWrapperReverse(formData)
  return await insertResourceAction(user, insertConsumableEndpoint)
}

export const updateConsumableAction = async (formData) => {
  const user = await consumableWrapperReverse(formData)
  return await updateResourceAction(user, updateConsumableEndpoint + formData.id)
}

export const deleteConsumableAction = async (id) => {
  return await deleteResourceAction(deleteConsumableEndpoint + id)
}