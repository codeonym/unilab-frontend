

export const laboratoryMaterialsOrdersWrapper = async (orders) => {
    return orders?.map(order => ( {
        id: order?.id,
        productId: order?.material?.materialId,
        name: order?.material?.type,
        requestDate: order?.requestDate,
        approvalStatus: status(order?.approvalStatus),
        supplier: order?.material?.supplier?.name
    }))
}

export const laboratoryConsumablesOrdersWrapper = async (orders) => {
    return orders?.map(order => ( {
        id: order?.id,
        productId: order?.consumable?.consumableId,
        name: order?.consumable?.type,
        requestDate: order?.requestDate,
        approvalStatus: status(order?.approvalStatus),
        supplier: order?.consumable?.supplier?.name
    }))
}

const status = (status) => {
    if (status == "PENDING")
        return "En attente"
    if(status == "APPROUVED")
        return "Approuvé"
    return "Rejeté"
}