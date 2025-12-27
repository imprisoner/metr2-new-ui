import type { Component } from "vue";

// ICONS
import CircledCheckmark from "~/components/icons/circled-checkmark.vue";
import Diaries from "~/components/icons/diaries.vue";
import Favorite from "~/components/icons/favorite.vue";
import Flame from "~/components/icons/flame.vue";
import Lightning from "~/components/icons/lightning.vue";
import DiariesIcon from "~/components/icons/diaries.vue";
import BookIcon from "~/components/icons/book.vue";
import PicDoubleIcon from "~/components/icons/pic-double.vue";
import CardIcon from "~/components/icons/card.vue";
import StarIcon from "~/components/icons/star.vue";
import SheetWithPencilIcon from "~/components/icons/sheet-with-pencil.vue";
import ArrowIcon from "~/components/icons/arrow.vue";
import UserIcon from "~/components/icons/user.vue";
import SlashedEyeIcon from "~/components/icons/slashed-eye.vue";
import CircledCrossIcon from "~/components/icons/circled-cross.vue";
import FlagIcon from "~/components/icons/flag.vue";

//

interface INavItem {
  label: string;
  icon: string;
  route: string;
}

export const MAIN_NAV_ITEMS: INavItem[] = [
  { label: "Популярное", icon: Flame.name!, route: "#" },
  { label: "Новое", icon: Lightning.name!, route: "a" },
  { label: "Мои подписки", icon: CircledCheckmark.name!, route: "b" },
  { label: "Сохранённое", icon: Favorite.name!, route: "v" },
  { label: "Все дневники", icon: Diaries.name!, route: "g" },
] as const;

export const MAIN_NAV_ITEMS_ICONS_MAP = {
  [Flame.name!]: Flame,
  [Lightning.name!]: Lightning,
  [CircledCheckmark.name!]: CircledCheckmark,
  [Favorite.name!]: Favorite,
  [Diaries.name!]: Diaries,
};

type MenuItemType = "button" | "divider";

interface IUserMenuItem {
  type: MenuItemType;
  props: Record<string, any>;
}

interface IUserMenuButton extends IUserMenuItem {
  type: "button";
  props: {
    to?: string;
    label: string;
    icon: Component;
    count?: number;
  };
}

interface IUserMenuDivider extends IUserMenuItem {
  type: "divider";
  props: {
    direction: "horizontal" | "vertical";
  };
}

export const USER_MENU_ITEMS: (IUserMenuDivider | IUserMenuButton)[] = [
  {
    type: "button",
    props: {
      to: "#",
      label: "Дневники",
      icon: DiariesIcon,
    },
  },
  {
    type: "button",
    props: {
      to: "#",
      label: "Блог",
      icon: BookIcon,
    },
  },
  {
    type: "button",
    props: {
      to: "#",
      label: "Портфолио",
      icon: PicDoubleIcon,
    },
  },
  {
    type: "button",
    props: {
      to: "#",
      label: "Услуги",
      icon: CardIcon,
    },
  },
  {
    type: "button",
    props: {
      to: "#",
      label: "Отзывы",
      icon: StarIcon,
    },
  },
  {
    type: "button",
    props: {
      to: "#",
      label: "Черновики",
      icon: SheetWithPencilIcon,
      count: 1,
    },
  },
  { type: "divider", props: { direction: "horizontal" } },
  {
    type: "button",
    props: {
      to: "#",
      label: "Сообщения",
      icon: ArrowIcon,
      count: 2,
    },
  },
  {
    type: "button",
    props: {
      to: "#",
      label: "Профиль",
      icon: UserIcon,
    },
  },
] as const;

export const POST_CARD_MORE_MENU_ITEMS: (IUserMenuDivider | IUserMenuButton)[] = [
  {
    type: "button",
    props: { label: "Подписаться", icon: CircledCheckmark },
  },
  { type: "button", props: { label: "Сообщение", icon: ArrowIcon } },
  { type: "divider", props: { direction: "horizontal" } },
  {
    type: "button",
    props: { label: "Скрыть из моей ленты", icon: SlashedEyeIcon },
  },
  { type: "button", props: { label: "Пожаловаться", icon: FlagIcon } },
  { type: "button", props: { label: "Отписаться", icon: CircledCrossIcon } },
  // { type: "button", props: { label: "Поделиться", icon: ShareIcon } },
] 