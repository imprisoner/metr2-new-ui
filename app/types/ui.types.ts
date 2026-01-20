import type { Component } from "vue";
import type { PostsTypeOptions } from "./pocketbase-types";

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
  icon: string;
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
  author: {
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