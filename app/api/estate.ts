import { EstateWithPostsDto } from "~/dto/estates.dto";
import { pb } from "./client";
import type { FlatsResponseWithPosts } from "~/types/api.types";

export const getFlatsWithPostsListByUserId = async ({
  userId,
  perPage = 3,
  page = 1,
}: {
  userId: string;
  perPage?: number;
  page?: number;
}) => {
  console.log(userId)
  const list = await pb
    .collection("flats")
    .getList<FlatsResponseWithPosts>(page, perPage, {
      filter: `user = "${userId}"`,
      expand: "post_flats_via_flat.post",
    });

  return list.items.map((item) => {
    return new EstateWithPostsDto(item);
  });
};
