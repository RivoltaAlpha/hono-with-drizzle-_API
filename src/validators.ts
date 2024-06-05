import { z } from 'zod'

export const userSchema = z.object({
    id:z.number(),
    name:z.string(),
    email:z.string().email(),
    // add other fields that might be present in the table
    // password:z.string(),
    // phone: z.string(),
    // address: z.string(),
    // score: z.number()
})
