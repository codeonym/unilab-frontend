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


export const deleteUserAction = async (id) => {

  console.log(id);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { ok: true, message: "User deleted successfully" };
}