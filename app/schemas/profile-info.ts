import { zodResolver } from "@primevue/forms/resolvers/zod";
import z from "zod";

const profileInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  nickname: z.string().min(1, "Nickname is required"),
  gender: z.enum(['Мужчина', 'Женщина']),
  age: z.number().nullable(),
  about: z.string().optional(),
  city: z.any().optional(),
});

export type ProfileInfoSchema = z.infer<typeof profileInfoSchema>

export default zodResolver(profileInfoSchema);