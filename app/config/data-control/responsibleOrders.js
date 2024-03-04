export const responsibleConsumablesOrdersWrapper = async (orders) => {
    return orders?.map(order => ( {
        id: order?.id,
        productId: order?.consumable?.consumableId,
        type: "consommable",
        name: order?.consumable?.type,
        approvalStatus: order?.approvalStatus,
        person: order?.person.userId,
        requestDate: order?.requestDate,
        quantity: order?.quantity || 1,
        supplier: order?.consumable?.supplier?.name
    }))
}

export const responsibleMaterialsOrdersWrapper = async (orders) => {
    return orders?.map(order => ( {
        id: order?.id,
        productId: order?.material?.materialId,
        type: "matériel",
        name: order?.material?.type,
        person: order?.person?.userId,
        requestDate: order?.requestDate,
        approvalStatus: order?.approvalStatus,
        quantity: 1,
        supplier: order?.material?.supplier?.name
    }))
}
export const responsibleMaterialsOrderWrapperReverse = async (data) => {
    return {
        materialId:data.materialId,
        laboratoryId:data.labId
    }
}

export const responsibleConsumablesOrderWrapperReverse = async (data) => {
    return {
        consumableId:data.consumableId,
        LabId:data.labId,
        quantity:data.quantity
    }
}
