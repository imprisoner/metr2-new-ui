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
import ShareIcon from "~/components/icons/share.vue";
import type { INavItem, IUserMenuButton, IUserMenuDivider } from "../types/ui.types";
import ChainsIcon from "~/components/icons/share/chains.vue";
import MaxIcon from "~/components/icons/share/max.vue";
import PinterestIcon from "~/components/icons/share/pinterest.vue";
import TelegramIcon from "~/components/icons/share/telegram.vue";
import VkIcon from "~/components/icons/share/vk.vue";
import WhatsappIcon from "~/components/icons/share/whatsapp.vue";

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

export const POST_CARD_MORE_MENU_ITEMS: (IUserMenuDivider | IUserMenuButton)[] =
  [
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
    { type: "divider", props: { direction: "horizontal" } },
    { type: "button", props: { label: "Поделиться", icon: ShareIcon } },
    { type: "button", props: { label: "Отписаться", icon: CircledCrossIcon } },
  ];

export const COMMENT_ACTIONS_MENU_ITEMS: (IUserMenuDivider | IUserMenuButton)[] = [
  { type: "button", props: { label: "Сообщение", icon: ArrowIcon } },
  { type: "button", props: { label: "Пожаловаться", icon: FlagIcon } },
];

export const SHARE_BUTTONS = [
  { provider: "copy", icon: ChainsIcon, handler: () => {} },
  { provider: "telegram", icon: TelegramIcon, handler: () => {} },
  { provider: "vkontakte", icon: VkIcon, handler: () => {} },
  { provider: "pinterest", icon: PinterestIcon, handler: () => {} },
  { provider: "max", icon: MaxIcon, handler: () => {} },
  { provider: "whatsapp", icon: WhatsappIcon, handler: () => {} },
] as const;
