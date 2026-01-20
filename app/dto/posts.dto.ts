import type { PostsResponseWithAuthor } from "~/types/api.types";

export class PostPreviewDto {
  type: string;
  title: string;
  imageUrl?: string;
  commentsCount: number;
  favoritesCount: number;
  likesCount: number;
  author: {
    avatarUrl?: string;
    name: string;
  };

  constructor(data: PostsResponseWithAuthor) {
    this.type = data.type;
    this.title = data.title;
    this.imageUrl = data.images[0]
      ? getPocketbaseFilePath(data, data.images[0])
      : undefined;
    this.commentsCount = 0;
    this.favoritesCount = 0;
    this.likesCount = 0;
    this.author = data.expand.author;
  }
}

