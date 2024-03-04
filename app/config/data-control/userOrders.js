export const userMaterialsOrderWrapperReverse = async (data) => {
    return {
        materialId:data.materialId,
        personId:data.userId
    }
}

export const userConsumableOrderWrapperReverse = async (data) => {
    return {
        consumableId:data.consumableId,
        personId:data.userId,
        quantity:data.quantity
    }
}