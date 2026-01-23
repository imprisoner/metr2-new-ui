import type { Component } from "vue";
import type {
  IsoDateString,
  PostsCommonViewStatusOptions,
  PostsCommonViewTypeOptions,
  PostsTypeOptions,
  RecordIdString,
} from "./pocketbase-types";
import type { IPostCommentPreview } from "./common.types";
import type { ButtonProps } from "primevue";

type MenuItemType = "button" | "divider";

export interface IUserMenuItem {
  type: MenuItemType;
  props: Record<string, any>;
}

export interface IUserMenuButtonProps {
  to?: string;
  label: string;
  icon: Component;
  count?: number;
  quickAccess?: {
    type: PostsTypeOptions;
  };
}

export interface IUserMenuButton extends IUserMenuItem {
  type: "button";
  props: IUserMenuButtonProps;
  // handler?: () => void;
}

export interface IUserMenuDividerProps {
  direction: "horizontal" | "vertical";
}

export interface IUserMenuDivider extends IUserMenuItem {
  type: "divider";
  props: IUserMenuDividerProps;
}

export interface INavItem {
  label: string;
  iconComponent: Component;
  route: string;
}

export interface ICommentItem {
  id: number;
  name: string;
  publishDate: string;
  text: string;
  likesCount: number;
  liked?: boolean;
  children?: ICommentItem[];
}

export interface FlatOption {
  imageUrl?: string;
  type: string;
  name: string;
}

export type NoItemsSectionIcon = "sad" | "smile";

export interface INoItemsSectionProps {
  title?: string;
  subtitle?: string;
  icon?: NoItemsSectionIcon;
  withButton?: boolean;
  uiSheetProps?: IUiSheetProps;
}

export type ProfilePageSectionKey =
  | "services"
  | "portfolio"
  | "feedbacks"
  | "estate"
  | "blog";

export interface IUiTabsItem {
  label: string;
  sectionKey: ProfilePageSectionKey;
  count?: number | null;
}

export interface IUiSheetProps {
  title?: string;
  count?: number;
}

export interface UiInputWrapperProps {
  icon?: Component;
  label?: string;
  invalid?: boolean;
  message?: string;
}

export interface IServiceItemProps {
  id: string;
  name: string;
  description?: string;
  priceMin: number;
  priceMax: number;
}

export interface IPostPreviewEntity {
  author?: {
    avatarUrl?: string;
    name: string;
  };
  imageUrl?: string;
  type: string;
  title: string;
  commentsCount?: number;
  favoritesCount?: number;
  likesCount?: number;
}

export interface IEstateItemProps {
  id: string;
  name: string;
  tags: string[];
  images: string[];
}

export interface IEstateWithPosts {
  estate: IEstateItemProps;
  posts: IPostPreviewEntity[];
}

export interface IPostCardEntity {
  id: string;
  title: string;
  status: PostsCommonViewStatusOptions;
  type: PostsCommonViewTypeOptions;
  author: RecordIdString;
  authorAvatar: string;
  authorUsername: string;
  lastComments: IPostCommentPreview[];
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
  //
  mobile?: boolean;
}

export interface IUserSectionProps {
  id: RecordIdString;
  username: string;
  avatar: string;
  name?: string;
  flatId?: string;
  flatName?: string;
  publishDate?: string;
  type?: PostsCommonViewTypeOptions;
  subscribersCount?: number;
  //
  shareButtonProps?: ButtonProps;
}

export interface IEstatePageItemProps {
  id: RecordIdString;
  nickname: string;
  postsCount: number;
  likesCount: number;
  favoritesCount: number;
  images: string[];
  description: string;
  tags: string[];
}

