import { baseUrl } from '@lib/constants'
import {getAllMaterialsEndpoint} from "@config/endpoints/materialsEndpoints";

export const getAllMaterialsResponsibleEndpoint = baseUrl + "/responsible/materials"
export const getLaboratoryMaterialsEndpoint = baseUrl + "/responsible/materials/laboratory/"
export const getMaterialByIdEndpoint = baseUrl + "/responsible/materials/id/"
export const assignMaterialEndpoint = baseUrl + "/responsible/materials/assignments/"