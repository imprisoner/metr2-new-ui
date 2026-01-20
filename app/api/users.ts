import type { IUserProfileResponse } from "~/types/api.types"
import { pb } from "./client"

export const getUserProfileByUsername = async (username: string) => {
  const record = await pb.collection("users_profile_view").getOne<IUserProfileResponse>(username, {expand: "location"})
  console.log(record)
  record.avatar = pb.files.getURL(record, record.avatar)

  return record
}