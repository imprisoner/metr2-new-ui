import { pb } from "./client";
import type { PostsResponseWithAuthor } from "~/types/api.types";
import { PostPreviewDto } from "~/dto/posts.dto";
import type { PostsResponse, PostsTypeOptions } from "~/types/pocketbase-types";

// export const getPostsList = async <E>({
//   page = 1,
//   perPage = 10,
//   sortBy = undefined,
//   expand = undefined,
//   fields = ["*"],
//   isShortContent = false,
//   filter = undefined,
// }: {
//   page?: number;
//   perPage?: number;
//   sortBy?: string[];
//   expand?: string[];
//   fields?: string[];
//   isShortContent?: boolean;
//   filter?: string;
// }) => {
//   if (isShortContent) {
//     fields.push("content:excerpt(100,true)");
//   }

//   const params = {
//     sort: sortBy?.join(","),
//     expand: expand?.join(","),
//     fields: fields?.join(","),
//     filter,
//   };

//   const response = await pb
//     .collection("posts")
//     .getList<PostsResponse<E>>(page, perPage, params);

//   return response;
// };

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

