export const supplierCols = [
  "id",
  "nom",
  "email",
  "téléphone",
  "adresse"
]
export const suppliersWrapper = async (suppliers) => {
  return suppliers?.map(supplier => ( {
    id: supplier?.supplierId,
    name: supplier?.name,
    email: supplier?.email,
    phone: supplier?.phone,
    address: supplier?.address
  }))
}

export const supplierWrapper = async (supplier) => {
  return {
    id: supplier.supplierId,
    name: supplier?.name,
    email: supplier?.email,
    phone: supplier?.phone,
    address: supplier?.address,
    website: supplier?.website,
    fax: supplier?.fax,
    bankName: supplier?.bankName,
    rib: supplier?.rib,
    responsiblePersonId: supplier?.responsible?.userId
  }
}

export const supplierWrapperReverse = async (supplier) => {
  return {
    name: supplier?.name,
    email: supplier?.email,
    phone: supplier?.phone,
    address: supplier?.address,
    website: supplier?.website,
    fax: supplier?.fax,
    bankName: supplier?.bankName,
    rib: supplier?.rib,
    responsible: {
      userId: supplier?.responsiblePersonId
    }
  }
}

export const supplierActions = {
  view: true,
  edit: true,
  delete: true
}