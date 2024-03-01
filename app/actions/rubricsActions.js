"use server"
import {rubricWrapperReverse} from "@config/data-control/rubric";
import {deleteResourceAction, insertResourceAction, updateResourceAction} from "@actions/crudActions";
import {deleteRubricEndpoint, insertRubricEndpoint, updateRubricEndpoint} from "@config/endpoints/rubricsEndpoints";

export const insertRubricAction = async (formData) => {
  const user = await rubricWrapperReverse(formData)
  return await insertResourceAction(user, insertRubricEndpoint)
}

export const updateRubricAction = async (formData) => {
  const user = await rubricWrapperReverse(formData)
  return await updateResourceAction(user, updateRubricEndpoint + formData.id)
}

export const deleteRubricAction = async (id) => {
  return await deleteResourceAction(deleteRubricEndpoint + id)
}