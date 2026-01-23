import { EstatePageItemDto, EstateWithPostsPreviewDto } from "~/dto/estates.dto";
import { pb } from "./client";
import type { FlatsResponseWithPosts, IEstateWithUserResponse } from "~/types/api.types";

export const getFlatsWithPostsListByUserId = async ({
  userId,
  perPage = 3,
  page = 1,
}: {
  userId: string;
  perPage?: number;
  page?: number;
}) => {
  const list = await pb
    .collection("flats")
    .getList<FlatsResponseWithPosts>(page, perPage, {
      filter: `user = "${userId}"`,
      expand: "post_flats_via_flat.post",
    });

  return list.items.map((item) => {
    return new EstateWithPostsPreviewDto(item);
  });
};

export const getEstateWithUserById = async (id: string) => {
  const data = await pb.collection("estates_common_view").getOne<IEstateWithUserResponse>(id, {
    expand: "user"
  });

  return new EstatePageItemDto(data);
};

