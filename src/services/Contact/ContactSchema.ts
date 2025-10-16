import { z } from "zod";

export const contactSchema = z.object({
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

    message: z
    .string()
    .min(1, { message: "Message is required" })
    .trim(),
})
