export const materialCols = [
    "id",
    "nombre d'inventaire",
    "type",
    "fournisseur",
    "date d’affectation"
]

export const materialsWrapper = async (materials) => {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&")
    console.log(materials)
    return materials?.map(material => ( {
    id: material?.materialId,
    inventoryNumber: material?.inventoryNumber,
    type: material?.type,
    supplier: material?.supplier?.name,
    assignmentDate: material?.assignmentDate
    }))
}

export const materialsNickNameWrapper = async (materials) => {
    return materials?.map(material => ( {
    id: material?.materialId,
    nickName: material?.type,
    }))
}

export const materialWrapper = async (material) => {
    return {
    id: material?.materialId,
    inventoryNumber: material?.inventoryNumber,
    type: material?.type,
    acquisitionDate: material?.acquisitionDate && isoToDateString(material?.acquisitionDate),
    supplierId: material?.supplier?.supplierId,
    laboratoryId: material?.laboratory?.laboratoryId,
    responsiblePersonId: material?.responsible?.userId,
    assignmentDate: material?.assignmentDate && isoToDateString(material?.acquisitionDate)
    }
}

export const materialWrapperReverse = async (material) => {
    return {
    inventoryNumber: material?.inventoryNumber,
    type: material?.type,
    acquisitionDate: material?.acquisitionDate,
    supplier: {
        supplierId: material?.supplierId
    },
    laboratory: {
        laboratoryId: material?.laboratoryId
    },
    responsiblePerson: {
        userId: material?.responsiblePersonId
    },
    assignmentDate: material?.assignmentDate
    }
}

export const materialActions = {
    view: false,
    edit: false,
    delete: false
}