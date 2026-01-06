import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { error } from "~/shared/utils/message";

export const sendMessageSchema = z.object({
  // email: z.email(error.wrongValue).nonempty(error.required),
  // password: z.string(error.wrongValue).nonempty(error.required),
});

export type SendMessageSchema = z.infer<typeof sendMessageSchema>;

const resolver = zodResolver(sendMessageSchema);
export default resolver;
