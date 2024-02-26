"use server"

export const insertUserAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "User inserted successfully" };
};


export const updateUserAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "User updated successfully" };
}