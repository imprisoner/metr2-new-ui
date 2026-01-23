import type {
  FlatsResponseWithPosts,
  IEstateWithUserResponse,
} from "~/types/api.types";
import type {
  IEstateItemProps,
  IEstatePageItemProps,
  IUserSectionProps,
} from "~/types/ui.types";
import { PostPreviewDto } from "./posts.dto";

export class EstateWithPostsPreviewDto {
  estate: IEstateItemProps;
  posts: PostPreviewDto[] = [];

  constructor(data: FlatsResponseWithPosts) {
    this.estate = {
      id: data.id,
      name: data.nickname,
      tags: [], // TODO
      images: data.images.map((filename) =>
        getPocketbaseFilePath(data, filename),
      ),
    };

    if (data.expand.post_flats_via_flat) {
      this.posts = data.expand.post_flats_via_flat.map((postFlatObj) => {
        const post = postFlatObj.expand.post;
        return new PostPreviewDto(post);
      });
    }
  }
}

export class EstatePageItemDto implements IEstatePageItemProps {
  id: string;
  nickname: string;
  postsCount: number;
  likesCount: number;
  favoritesCount: number;
  images: string[];
  description: string;
  tags: string[];

  user: IUserSectionProps;

  constructor(data: IEstateWithUserResponse) {
    this.id = data.id;
    this.nickname = data.nickname;
    this.tags = [];
    this.images = data.images.map((filename) =>
      getPocketbaseFilePath(data, filename),
    );
    this.description = data.description;
    this.postsCount = data.postsCount!;
    this.likesCount = data.likesCount!;
    this.favoritesCount = 834;

    this.user = {
      id: data.expand.user.id,
      avatar: getPocketbaseFilePath(
        data.expand.user,
        data.expand.user.avatar ?? "",
      ),
      username: data.expand.user.username,
      name: data.expand.user.name,
      subscribersCount: 721, // TODO
    };
  }
}
