import {isoToDateString} from "@lib/utils";

export const userCols = [
  "",
  "id",
  "email",
  "responsabilité",
  "téléphone",
  "grade",
]

export const usersWrapper = async (users) => {
  return users?.map(user => ( {
    id: user?.userId,
    email: user?.email,
    responsibility: user?.role,
    phone: user?.phone,
    grade: user?.grade
  }))
}

export const usersNickNamesWrapper = async (users) => {
  return users?.map(user => ( {
    id: user?.userId,
    nickName: user?.firstName + " " + user?.lastName
  }))
}

export const userWrapper = async (user) => {
  return {
    id: user?.userId,
    firstName: user?.firstName,
    lastName: user?.lastName,
    dateOfBirth: user?.dateOfBirth && isoToDateString(user?.dateOfBirth),
    email: user?.email,
    password: user?.password,
    cin: user?.cin,
    somNumber: user?.somNumber,
    address: user?.address,
    responsibility: user?.role,
    phone: user?.phone,
    grade: user?.grade,
    bankName: user?.bankName,
    bankAccountNumber: user?.bankAccountNumber,
    city: user?.city,
    postalCode: user?.postalCode
  }
}
export const userWrapperReverse = async (user) => {
  return {
    firstName: user?.firstName,
    lastName: user?.lastName,
    dateOfBirth: user?.dateOfBirth,
    email: user?.email,
    password: user?.password,
    cin: user?.cin,
    somNumber: user?.somNumber,
    address: user?.address,
    role: user?.responsibility,
    phone: user?.phone,
    grade: user?.grade,
    responsibility: user?.role,
    bankName: user?.bankName,
    bankAccountNumber: user?.bankAccountNumber,
    city: user?.city,
    postalCode: user?.postalCode
  }
}


export const userActions = {
  view: true,
  edit: true,
  delete: true
}

export const userResponsibilities = [
  "ADMIN",
  "RESPONSIBLE",
  "USER",
]