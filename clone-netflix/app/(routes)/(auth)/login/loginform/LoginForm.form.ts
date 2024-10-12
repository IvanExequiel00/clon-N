import { z } from "zod"
export const formSchema = z.object({
    email: z.string().min(2, {
      message:"Email is too short"
    }),
    password: z.string().min(2, {
      message:"password is too short"
    }),
  })