import type { Component } from "vue";

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