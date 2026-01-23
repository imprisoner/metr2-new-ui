import { pb } from "./client";
import type {
  ITypedCommonPostsResponse,
  PostsResponseWithAuthor,
} from "~/types/api.types";
import { PostEntityDto, PostPreviewDto } from "~/dto/posts.dto";
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

export const getPopularPostsList = async ({
  page = 1,
  perPage = 3,
}: {
  page?: number;
  perPage?: number;
}) => {
  const list = await pb
    .collection("posts_common_view")
    .getList<ITypedCommonPostsResponse>(page, perPage, {
      expand: "lastComments.author",
    });

  const dtoItems = list.items.map((item) => {
    const dto = new PostEntityDto(item);
    return dto;
  });

  return {
    ...list,
    items: dtoItems,
  };
};

export const getFullPostsListByFlatId = async (id: string) => {
  const list = await pb
    .collection("posts_common_view")
    .getFullList<ITypedCommonPostsResponse>({
      expand: "lastComments.author",
      filter: pb.filter('flatId = {:id}', { id }),
    });

  return list.map((item) => new PostEntityDto(item));
};
