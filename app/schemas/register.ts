import z from "zod";
import { passwordSchema } from ".";
import { zodResolver } from "@primevue/forms/resolvers/zod";

const registerSchema = z
  .object({
    email: z.email(error.wrongValue).nonempty(error.required),
    password: passwordSchema,
    passwordConfirm: z.string(error.required),
    name: z.string(error.wrongValue).min(2, "Не менее 2-х символов"),
    role: z.string(),
  })
  .refine(
    (data: { password: string; passwordConfirm: string }) =>
      data.password === data.passwordConfirm,
    {
      message: "Неверный повторный ввод",
      path: ["passwordConfirm"],
    }
  );

export type RegisterSchema = z.infer<typeof registerSchema>;

const resolver = zodResolver(registerSchema);
export default resolver;
