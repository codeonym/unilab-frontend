"use server"

export const insertRubricAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "Rubric inserted successfully" };
};


export const updateRubricAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "Rubric updated successfully" };
}


export const deleteRubricAction = async (id) => {

  console.log(id);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { ok: true, message: "Rubric deleted successfully" };
}