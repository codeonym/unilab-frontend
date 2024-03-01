"use server"

import {supplierWrapperReverse} from "@config/data-control/supplier";
import {deleteResourceAction, insertResourceAction, updateResourceAction} from "@actions/crudActions";
import {
  deleteSupplierEndpoint,
  insertSupplierEndpoint,
  updateSupplierEndpoint
} from "@config/endpoints/suppliersEndpoints";

export const insertSupplierAction = async (formData) => {
  const user = await supplierWrapperReverse(formData)
  return await insertResourceAction(user, insertSupplierEndpoint)
}

export const updateSupplierAction = async (formData) => {
  const user = await supplierWrapperReverse(formData)
  return await updateResourceAction(user, updateSupplierEndpoint + formData.id)
}

export const deleteSupplierAction = async (id) => {
  return await deleteResourceAction(deleteSupplierEndpoint + id)
}