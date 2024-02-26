"use server"

export const insertMaterialAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "Material inserted successfully" };
};


export const updateMaterialAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "Material updated successfully" };
}


export const deleteMaterialAction = async (id) => {

  console.log(id);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { ok: true, message: "Material deleted successfully" };
}