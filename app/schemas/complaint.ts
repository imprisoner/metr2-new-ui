import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";

export const complaintSchema = z.object({
  // email: z.email(error.wrongValue).nonempty(error.required),
  // password: z.string(error.wrongValue).nonempty(error.required),
});

export type ComplaintSchema = z.infer<typeof complaintSchema>;

const resolver = zodResolver(complaintSchema);
export default resolver;
