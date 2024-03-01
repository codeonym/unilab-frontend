"use server"
// this file will hold the login actions and communication with the backend server

export const loginAction = async (formData) => {
  await signIn("credentials", { email: formData.email, password: formData.password });
  return {
    ok: true,
    message: "Authentification réussie !"
  };
};