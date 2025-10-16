import { z } from "zod";

export const registerSchema = z.object({
    first_name: z.
    string()
    .min(1,{ message: 'First name is required' })
    .trim(),

    last_name: z.
    string()
    .min(1,{ message: 'Last name is required' })
    .trim(),

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

    password_confirmation: z
    .string()
    .min(1, { message: "Password confirmation is required" })
    .trim(),
})
.refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password"],
});