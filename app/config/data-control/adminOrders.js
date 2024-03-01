export const adminConsumablesOrdersWrapper = async (orders) => {
    return orders?.map(order => ( {
        id: order?.id,
        productId: order?.consumable?.consumableId,
        type: "consommable",
        name: order?.consumable?.type,
        approvalStatus: order?.approvalStatus,
        laboratory: order?.laboratory?.name,
        requestDate: order?.requestDate,
        quantity: order?.quantity,
        supplier: order?.consumable?.supplier?.name
    }))
}

export const adminMaterialsOrdersWrapper = async (orders) => {
    return orders?.map(order => ( {
        id: order?.id,
        productId: order?.material?.materialId,
        type: "matériel",
        name: order?.material?.type,
        laboratory: order?.laboratory?.name,
        requestDate: order?.requestDate,
        approvalStatus: order?.approvalStatus,
        quantity: 1,
        supplier: order?.material?.supplier?.name
    }))
}
export const adminConsumableOrderWrapper = async (order) => {
    return {
        id: order?.id,
        productId: order?.consumable?.consumableId,
        name: order?.consumable?.type,
        type: "consommable",
        laboratory: order?.laboratory?.name,
        requestDate: order?.requestDate,
        quantity: order?.quantity,
        supplier: order?.consumable?.supplier?.name
    }
}

export const adminMaterialOrderWrapper = async (order) => {
    return {
        id: order?.id,
        productId: order?.material?.materialId,
        name: order?.material?.type,
        type: "matériel",
        laboratoryId: order?.laboratory?.laboratoryId,
        quantity: 1,
        supplier: order?.material?.supplier?.name
    }
}

export const adminOrdersWrapper = async (materialsOrders, consumablesOrders) => {
    const dataMaterials = await adminMaterialsOrdersWrapper(materialsOrders)
    const dataConsumables = await adminConsumablesOrdersWrapper(consumablesOrders)

    return [...dataMaterials, ...dataConsumables]
}