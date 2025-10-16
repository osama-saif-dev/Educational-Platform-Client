import { z } from "zod";

export const verifySchema = z.object({
    code: z.
    string()
    .min(1, { message: 'Code is required' })
    .max(5, { message: 'Code must contain 5 digits' })
    .trim()
})