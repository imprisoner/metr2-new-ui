import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";

export const sendMessageSchema = z.object({
  // email: z.email(error.wrongValue).nonempty(error.required),
  // password: z.string(error.wrongValue).nonempty(error.required),
});

export type SendMessageSchema = z.infer<typeof sendMessageSchema>;

const resolver = zodResolver(sendMessageSchema);
export default resolver;
