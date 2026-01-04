import type { Component, ExtractPublicPropTypes } from "vue";
import UiNoItemsSection from "~/components/ui/no-items-section/no-items-section.vue";

type MenuItemType = "button" | "divider";

export interface IUserMenuItem {
  type: MenuItemType;
  props: Record<string, any>;
}

export interface IUserMenuButton extends IUserMenuItem {
  type: "button";
  props: {
    to?: string;
    label: string;
    icon: Component;
    count?: number;
  };
  handler?: () => void;
}

export interface IUserMenuDivider extends IUserMenuItem {
  type: "divider";
  props: {
    direction: "horizontal" | "vertical";
  };
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
