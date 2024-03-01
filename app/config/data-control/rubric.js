export const rubricCols = [
  "id",
  "code",
  "désignation",
  "montant engagé",
  "montant alloué",
  "percentage"
]
export const rubricsWrapper = async (rubrics) => {
  return rubrics?.map(rubric => ( {
    id: rubric?.rubricId,
    code: rubric?.code,
    designation: rubric?.designation,
    engagedAmount: rubric?.rubricBudget?.engagedAmount,
    allocatedAmount: rubric?.rubricBudget?.allocatedAmount
  }))
}

export const rubricWrapper = async (rubric) => {
  return {
    id: rubric?.rubricId,
    code: rubric?.code,
    designation: rubric?.designation,
    engagedAmount: rubric?.rubricBudget?.engagedAmount,
    allocatedAmount: rubric?.rubricBudget?.allocatedAmount
  }
}
export const rubricWrapperReverse = async (rubric) => {
  return {
    code: rubric?.code,
    designation: rubric?.designation,
    rubricBudget: {
      engagedAmount: rubric?.engagedAmount,
      allocatedAmount: rubric?.allocatedAmount
    }
  }
}
export const rubricActions = {
  view: true,
  edit: true,
  delete: true
}