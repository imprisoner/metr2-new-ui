import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";

export const loginSchema = z.object({
  email: z.email(error.wrongValue).nonempty(error.required),
  password: z.string(error.wrongValue).nonempty(error.required),
});

export type LoginSchema = z.infer<typeof loginSchema>;

const resolver = zodResolver(loginSchema);
export default resolver;
