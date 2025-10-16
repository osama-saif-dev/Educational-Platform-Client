import { z } from "zod";

export const resetPasswordSchema = z.object({
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