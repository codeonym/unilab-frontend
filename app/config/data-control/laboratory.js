export const laboratoryCols = [
  "id",
  "nom",
  "Chef",
  "adjoint"
]
export const laboratoriesWrapper = async (laboratories) => {
  return laboratories?.map(laboratory => ( {
    id: laboratory?.laboratoryId,
    name: laboratory?.name,
    responsiblePerson: laboratory?.responsiblePerson?.firstName + " " + laboratory?.responsiblePerson?.lastName,
    deputyPerson: laboratory?.deputyPerson?.firstName + " " + laboratory?.deputyPerson?.lastName,
  }))
}

export const laboratoryWrapper = async (laboratory) => {
  return {
    id: laboratory?.laboratoryId,
    name: laboratory?.name,
    responsiblePersonId: laboratory?.responsiblePerson?.userId,
    deputyPersonId: laboratory?.deputyPerson?.userId,
  }
}
export const laboratoryActions = {
  view: true,
  edit: false,
  delete: false
}