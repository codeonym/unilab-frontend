"use server"

export const insertConsumableAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "Consumable inserted successfully" };
};


export const updateConsumableAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "Consumable updated successfully" };
}


export const deleteConsumableAction = async (id) => {

  console.log(id);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { ok: true, message: "Consumable deleted successfully" };
}