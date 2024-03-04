export const consumableCols = [
    "id",
    "type",
    "quantité",
    "fournisseur",
    "date d’affectation"
]
export const consumablesWrapper = async (consumables) => {
    return consumables?.map(consumable => ( {
        id: consumable?.consumableId,
        type: consumable?.type,
        quantity: consumable?.quantity,
        supplier: consumable?.supplier?.name
    }))
}

export const consumablesNickNameWrapper = async (consumables) => {
    return consumables?.map(consumable => ( {
        id: consumable?.consumableId,
        nickName: consumable?.type,
    }))
}
export const consumableActions = {
    view: false,
    edit: false,
    delete: false
}