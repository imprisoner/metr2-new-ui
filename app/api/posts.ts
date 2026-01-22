import { pb } from "./client";
import type {
  ITypedPostsPopularResponse,
  PostsResponseWithAuthor,
} from "~/types/api.types";
import { PostPopularDto, PostPreviewDto } from "~/dto/posts.dto";
import type { PostsTypeOptions } from "~/types/pocketbase-types";

export const getPostsListByUserId = async ({
  userId,
  postType,
  page = 1,
  perPage = 3,
}: {
  userId: string;
  postType: PostsTypeOptions;
  page?: number;
  perPage?: number;
}) => {
  const list = await pb
    .collection("posts")
    .getList<PostsResponseWithAuthor>(page, perPage, {
      filter: `type = "${postType}" && author = "${userId}"`,
      expand: "author",
    });

  return list.items.map((item) => new PostPreviewDto(item));
};

export const getPostsListByFlatId = async ({
  flatId,
  page = 1,
  perPage = 3,
}: {
  flatId: string;
  postType: PostsTypeOptions;
  page?: number;
  perPage?: number;
}) => {
  const list = await pb
    .collection("posts")
    .getList<PostsResponseWithAuthor>(page, perPage, {
      filter: `type = "journal" && author = "${flatId}"`,
      expand: "author",
    });

  return list.items.map((item) => new PostPreviewDto(item));
};

export const getPopularPostsList = async ({
  page = 1,
  perPage = 3,
}: {
  page?: number;
  perPage?: number;
}) => {
  const list = await pb
    .collection("popular_posts_view")
    .getList<ITypedPostsPopularResponse>(page, perPage, {
      expand: "lastComments.author",
    });

  return list.items.map((item) => {
    const dto = new PostPopularDto(item);
    return dto;
  });
};

