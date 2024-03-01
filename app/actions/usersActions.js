"use server"
import {deletePersonEndpoint, insertPersonEndpoint, updatePersonEndpoint} from "@config/endpoints/usersEndpoints";
import {userWrapperReverse} from "@config/data-control/user";
import {deleteResourceAction, insertResourceAction, updateResourceAction} from "@actions/crudActions";

export const insertUserAction = async (formData) => {
  const user = await userWrapperReverse(formData)
  return await insertResourceAction(user, insertPersonEndpoint)
}

export const updateUserAction = async (formData) => {
  const user = await userWrapperReverse(formData)
  return await updateResourceAction(user, updatePersonEndpoint + formData.id)
}

export const deleteUserAction = async (id) => {
  return await deleteResourceAction(deletePersonEndpoint + id)
}
