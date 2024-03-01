// inputValidation.js

import { z } from "zod";
import { userResponsibilities } from "@config/data-control/user"

// Common validation for string fields
const stringSchema = z.string().min(3).max(255);

// Birthdate validation
const birthDateSchema = z.coerce.date().refine((value) => {
  const currentDate = new Date();
  return value < currentDate;
});


export const loginValidationSchema = {
  email: z.string().email(),
  password: z.string().min(8)
}

// Validation for user fields
export const userValidationSchema = {
  firstName: stringSchema,
  lastName: stringSchema,
  dateOfBirth: birthDateSchema,
  email: z.string().email(),
  cin: z.string().regex(/^[A-Za-z]*\d+$/),
  phone: z.string().regex(/^(06|05|07)\d{8}$/),
  grade: stringSchema,
  address: stringSchema,
  city: stringSchema,
  postalCode: z.string().refine((value) => /^\d+$/.test(value)),
  responsibility: z.enum(userResponsibilities),
  bankAccountNumber: z.string().refine((value) => /^\d{24}$/.test(value), "RIB number must be 24 digits"),
  bankName: stringSchema,
  somNumber: z.string().refine((value) => /^\d{7}$/.test(value), "Som number must be 7 digits"),
  password: z.string().min(8),
};


export const rubricValidationSchema = {
  code: z.string().refine((value) => /^\d+$/.test(value)),
  designation: stringSchema,
  allocatedAmount: z.string().refine((value) => /^[\d.]*$/.test(value)),
  engagedAmount: z.string().refine((value) => /^[\d.]*$/.test(value))
};


export const supplierValidationSchema = {
  name: stringSchema,
  website: z.optional(z.string().trim().url({ message: 'Invalid URL' })),
  email: z.string().email(),
  phone: z.string().regex(/^(06|05|07)\d{8}$/),
  fax: z.string().regex(/^(06|05|07)\d{8}$/),
  address: stringSchema,
  rib: z.string().refine((value) => /^\d{24}$/.test(value), "RIB number must be 24 digits"),
  bankName: stringSchema,
};


export const materialValidationSchema = {
  type: stringSchema,
  inventoryNumber: z.string().refine((value) => /^\d{5}$/.test(value), "Inventory number must be 5 digits"),
  acquisitionDate: z.coerce.date().refine((value) => {
    const currentDate = new Date();
    return value < currentDate;
  })
}


export const consumableValidationSchema = {
  type: stringSchema,
  quantity: z.coerce.number().min(1)
}