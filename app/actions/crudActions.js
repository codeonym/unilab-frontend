import {withAuth} from "@lib/auth";
import { revalidatePath } from 'next/cache'

let response = {
    ok: true,
    message: "success",
    data: null
}

export const insertResourceAction = async (resource, insertResourceEndpoint, revalidate="/dashboard") => {

    try {
        const jsonObj = JSON.stringify(resource)
        const {accessToken} = await withAuth()
        const res = await fetch(insertResourceEndpoint, {
            method: "POST",
            body: jsonObj,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            }
        })

        const data = await res.json()
        if(data) {
            response.ok= true
            response.data = data
            response.message = "inserted successfully"
            revalidatePath(revalidate)
        }
    }catch (err) {
        response.ok = false
        response.message = "Failed to insert"
        console.error(err)
    }
    return response
}

export const updateResourceAction = async (resource, updateResourceEndpoint, revalidate="/dashboard") => {

    try {
        const jsonObj = JSON.stringify(resource)
        const {accessToken} = await withAuth()
        const res = await fetch(updateResourceEndpoint, {
            method: "PUT",
            body: jsonObj,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            }
        })

        const data = await res.json()
        if(data) {
            response.ok= true
            response.data = data
            response.message = "updated successfully"
            revalidatePath(revalidate)
        }
    }catch (err) {
        response.ok = false
        response.message = "Failed to update"
        console.error(err)
    }
    return response
}

export const deleteResourceAction = async (deleteResourceEndpoint, revalidate="/dashboard") => {

    try {
        const {accessToken} = await withAuth()
        const res = await fetch(deleteResourceEndpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            }
        })
        response.ok = true
        response.message = "deleted successfully"
        revalidatePath(revalidate)
    }catch (err) {
        response.ok = false
        response.message = "failed to delete"
        console.error(err)
    }
    return response
}

export const patchResourceAction = async (patchResourceEndpoint, revalidate="/dashboard") => {

    try {
        const {accessToken} = await withAuth()
        const res = await fetch(patchResourceEndpoint, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            }
        })
        response.ok = true
        response.message = "updated successfully"
        revalidatePath(revalidate)
    }catch (err) {
        response.ok = false
        response.message = "failed to update"
        console.error(err)
    }
    return response
}