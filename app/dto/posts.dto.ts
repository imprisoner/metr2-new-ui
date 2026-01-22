import type {
  ITypedPostsPopularResponse,
  PostsResponseWithAuthor,
} from "~/types/api.types";
import type { IPostCommentPreview } from "~/types/common.types";
import type {
  CommentsPostsResponse,
  IsoDateString,
  PopularPostsViewStatusOptions,
  PopularPostsViewTypeOptions,
  PostsResponse,
  RecordIdString,
  UsersRecord,
} from "~/types/pocketbase-types";

export class PostPreviewDto {
  type: string;
  title: string;
  imageUrl?: string;
  commentsCount: number;
  favoritesCount: number;
  likesCount: number;
  author?: {
    avatarUrl?: string;
    name: string;
  };

  constructor(
    data:
      | PostsResponseWithAuthor
      | PostsResponse<string, { author?: UsersRecord }>,
  ) {
    this.type = data.type;
    this.title = data.title;
    this.imageUrl = data.images
      ? getPocketbaseFilePath(data, data.images[0]!)
      : undefined;
    this.commentsCount = 0;
    this.favoritesCount = 0;
    this.likesCount = 0;
    this.author = data.expand.author;
  }
}

export class PostCommentPreviewDto implements IPostCommentPreview {
  content: string;
  authorAvatarUrl?: string | undefined;
  authorName: string;

  constructor(data: CommentsPostsResponse<{ author: UsersRecord }>) {
    this.content = data.content;
    this.authorName = data.expand.author.name;

    this.authorAvatarUrl = getPocketbaseFilePath(
      data.expand.author,
      data.expand.author.avatar ?? "",
    );
  }
}
export class PostPopularDto {
  id: string;
  title: string;
  status: PopularPostsViewStatusOptions;
  type: PopularPostsViewTypeOptions;
  author: RecordIdString;
  authorAvatar: string;
  authorUsername: string;
  commentsCount: number;
  content_json: any[];
  created: IsoDateString;
  images: string[];
  likesCount: number;
  tags: RecordIdString[];
  updated: IsoDateString;
  videos: string[];
  flatId?: string;
  flatName?: string;
  publishDate?: IsoDateString;
  services?: string[];

  lastComments: PostCommentPreviewDto[];

  constructor(data: ITypedPostsPopularResponse) {
    this.id = data.id;
    this.title = data.title;
    this.status = data.status;
    this.type = data.type;
    this.author = data.author;
    this.authorAvatar = data.authorAvatar ?? "";
    this.authorUsername = data.authorUsername ?? "";
    this.commentsCount = data.commentsCount ?? 0;
    this.content_json = data.content_json ?? [];
    this.created = data.created!;
    this.likesCount = data.likesCount ?? 0;
    this.tags = data.tags!;
    this.updated = data.updated!;
    this.videos = data.videos!;
    this.flatId = data.flatId ?? undefined;
    this.flatName = data.flatName ?? undefined;
    this.publishDate = data.publishDate;
    this.services = data.services ?? undefined;
    
    this.images =
      data.images?.map((filename) => getPocketbaseFilePath(data, filename)) ??
      [];

    this.lastComments =
      data.expand.lastComments?.map(
        (item) => new PostCommentPreviewDto(item),
      ) || [];
  }
}

