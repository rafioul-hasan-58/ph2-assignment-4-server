import { z } from "zod";

const loginValidationSchema = z.object({
      email: z.string({ required_error: 'email is required.' }),
      password: z.string({ required_error: 'Password is required' }),
  });

 export const loginValidations={
    loginValidationSchema
  }