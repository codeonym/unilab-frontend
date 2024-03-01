"use server"
import {deleteResourceAction, insertResourceAction, updateResourceAction} from "@actions/crudActions";
import {
  deleteMaterialEndpoint,
  insertMaterialEndpoint,
  updateMaterialEndpoint
} from "@config/endpoints/materialsEndpoints";
import {consumableWrapperReverse} from "@config/data-control/consumable";
import {materialWrapperReverse} from "@config/data-control/material";

export const insertMaterialAction = async (formData) => {
  const user = await materialWrapperReverse(formData)
  return await insertResourceAction(user, insertMaterialEndpoint)
}

export const updateMaterialAction = async (formData) => {
  const user = await consumableWrapperReverse(formData)
  return await updateResourceAction(user, updateMaterialEndpoint + formData.id)
}

export const deleteMaterialAction = async (id) => {
  return await deleteResourceAction(deleteMaterialEndpoint + id)
}