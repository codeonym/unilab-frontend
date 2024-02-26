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