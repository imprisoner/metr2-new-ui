// ICONS
import CircledCheckmark from "#layers/ui/app/icons/circled-checkmark-icon.vue";
import Diaries from "#layers/ui/app/icons/diaries-icon.vue";
import Favorite from "#layers/ui/app/icons/favorite-icon.vue";
import Flame from "#layers/ui/app/icons/flame-icon.vue";
import Lightning from "#layers/ui/app/icons/lightning-icon.vue";
import DiariesIcon from "#layers/ui/app/icons/diaries-icon.vue";
import BookIcon from "#layers/ui/app/icons/book-icon.vue";
import PicDoubleIcon from "#layers/ui/app/icons/pic-double-icon.vue";
import CardIcon from "#layers/ui/app/icons/card-icon.vue";
import StarIcon from "#layers/ui/app/icons/star-icon.vue";
import SheetWithPencilIcon from "#layers/ui/app/icons/sheet-with-pencil-icon.vue";
import ArrowIcon from "#layers/ui/app/icons/arrow-icon.vue";
import UserIcon from "#layers/ui/app/icons/user-icon.vue";
import SlashedEyeIcon from "#layers/ui/app/icons/slashed-eye-icon.vue";
import CircledCrossIcon from "#layers/ui/app/icons/circled-cross-icon.vue";
import FlagIcon from "#layers/ui/app/icons/flag-icon.vue";
import ShareIcon from "#layers/ui/app/icons/share-icon.vue";
import type {
  INavItem,
  IUserMenuButton,
  IUserMenuDivider,
} from "../types/ui.types";
import ChainsIcon from "#layers/ui/app/icons/share/chains-icon.vue";
import MaxIcon from "#layers/ui/app/icons/share/max-icon.vue";
import PinterestIcon from "#layers/ui/app/icons/share/pinterest-icon.vue";
import TelegramIcon from "#layers/ui/app/icons/share/telegram-icon.vue";
import VkIcon from "#layers/ui/app/icons/share/vk-icon.vue";
import WhatsappIcon from "#layers/ui/app/icons/share/whatsapp-icon.vue";

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
      to: "/diaries",
      label: "Дневники",
      icon: DiariesIcon,
      quickAccess: { type: "diary" },
    },
  },
  {
    type: "button",
    props: {
      to: "#",
      label: "Блог",
      icon: BookIcon,
      quickAccess: { type: "blog" },
    },
  },
  {
    type: "button",
    props: {
      to: "#",
      label: "Портфолио",
      icon: PicDoubleIcon,
      quickAccess: { type: "portfolio" },
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
      to: "/drafts",
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
      to: "/profile",
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

export const COMMENT_ACTIONS_MENU_ITEMS: (
  | IUserMenuDivider
  | IUserMenuButton
)[] = [
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

export const OAUTH_PROVIDERS = ["google", "yandex", "vk"] as const;

