import { z } from "zod";

export const loginSchema = z.object({

    email: z.
    string()
    .min(1,{ message: 'Email is required' })
    .email({ message: 'Invalid email address' })
    .trim(),

    password: z.
    string()
    .min(1, { message: 'Password is required' })
    .min(8, { message: 'Password must be 8 charachter at least' })
    .trim(),

})
