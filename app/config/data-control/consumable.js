export const consumableCols = [
  "id",
  "type",
  "quantité",
  "fournisseur",
]

export const consumablesWrapper = async (consumables) => {
  return consumables?.map(consumable => ( {
    id: consumable?.consumableId,
    type: consumable?.type,
    quantity: consumable?.quantity,
    supplier: consumable?.supplier?.name
  }))
}

export const consumableWrapper = async (consumable) => {
  return {
    id: consumable?.consumableId,
    type: consumable?.type,
    quantity: consumable?.quantity,
    supplierId: consumable?.supplier?.supplierId,
    laboratoryId: consumable?.laboratory?.laboratoryId
  }
}

export const consumableWrapperReverse = async (consumable) => {
  return {
    type: consumable?.type,
    quantity: consumable?.quantity,
    supplier: {
      supplierId: consumable?.supplierId
    },
    laboratory: {
      laboratoryId: consumable?.laboratoryId
    }
  }
}
export const consumableActions = {
  view: true,
  edit: true,
  delete: true
}