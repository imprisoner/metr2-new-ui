import { pb } from "./client";
import type { PostsResponseWithAuthor } from "~/types/api.types";
import { PostPreviewDto } from "~/dto/posts.dto";

export const getFullPortfolioListByUserId = async (userId?: string) => {
  if (!userId) return [];

  const list = await pb
    .collection("posts")
    .getFullList<PostsResponseWithAuthor>({
      filter: `type = "portfolio" && author = "${userId}"`,
      expand: "author",
    });

  return list.map((item) => new PostPreviewDto(item));
};
