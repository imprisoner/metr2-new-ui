export type PostType = "journal" | "blog" | "portfolio";

export interface IPostCommentPreview {
  content: string;
  authorName: string;
  authorAvatarUrl?: string;
}