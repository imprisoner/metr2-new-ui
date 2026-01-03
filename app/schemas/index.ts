import { error } from "~/utils/message";
import { z } from "zod";

export const latinOnlyWithNumbersSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+$/, error.wrongValue)
  .nonempty(error.required);

export const passwordSchema = z
  .string(error.required)
  .regex(/^[a-zA-Z0-9!@#$%^&*]+$/, "Только латинские буквы")
  .min(8, { message: error.min(8) })
  .max(20, { message: error.max(20) })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Минимум одна заглавная буква",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Минимум одна строчная буква",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Минимум одна цифра",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Минимум один специальный символ",
  });
