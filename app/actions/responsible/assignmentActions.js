"use server"
import { patchResourceAction } from "@actions/crudActions";
import { assignMaterialEndpoint } from "@config/endpoints/responsible/labMaterialsEndPoint";
export const assignMaterialAction = async (formData) => {
    return await patchResourceAction(assignMaterialEndpoint + formData.materielId + "/" + formData.userId, "/dashboard/assignment")
}