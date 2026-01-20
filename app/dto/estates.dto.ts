import type { FlatsResponseWithPosts } from "~/types/api.types";
import type { IEstateItemProps } from "~/types/ui.types";
import { PostPreviewDto } from "./posts.dto";

export class EstateWithPostsDto {
  estate: IEstateItemProps;
  posts: PostPreviewDto[] = [];

  constructor(data: FlatsResponseWithPosts) {
    this.estate = {
      id: data.id,
      name: data.nickname,
      tags: [], // TODO
    };

    if (data.expand.post_flats_via_flat) {
      this.posts = data.expand.post_flats_via_flat.map((postFlatObj) => {
        const post = postFlatObj.expand.post
        return new PostPreviewDto(post)
      });
    }
  }
}

