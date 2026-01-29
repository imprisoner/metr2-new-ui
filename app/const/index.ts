// ICONS
import CircledCheckmark from "#layers/ui/app/icons/circled-checkmark-icon.vue";
import Diaries from "#layers/ui/app/icons/diaries-icon.vue";
import Favorite from "#layers/ui/app/icons/favorite-icon.vue";
import Flame from "#layers/ui/app/icons/flame-icon.vue";
import Lightning from "#layers/ui/app/icons/lightning-icon.vue";
import ArrowIcon from "#layers/ui/app/icons/arrow-icon.vue";
import SlashedEyeIcon from "#layers/ui/app/icons/slashed-eye-icon.vue";
import CircledCrossIcon from "#layers/ui/app/icons/circled-cross-icon.vue";
import FlagIcon from "#layers/ui/app/icons/flag-icon.vue";
import ShareIcon from "#layers/ui/app/icons/share-icon.vue";
import type {
  IContractorsMenuNavItem,
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
import type { PostType } from "~/types/common.types";
import { routes } from "./routes";
import StarsIcon from "~~/layers/ui/app/icons/stars-icon.vue";
import PaintRollerIcon from "~~/layers/ui/app/icons/paint-roller-icon.vue";
import SpannerIcon from "~~/layers/ui/app/icons/spanner-icon.vue";
import DrillIcon from "~~/layers/ui/app/icons/drill-icon.vue";
import CompassIcon from "~~/layers/ui/app/icons/compass-icon.vue";
import MeasureTapeIcon from "~~/layers/ui/app/icons/measure-tape-icon.vue";
import GridIcon from "~~/layers/ui/app/icons/grid-icon.vue";
import type { MenuItem } from "primevue/menuitem";
import FavoriteIcon from "#layers/ui/app/icons/favorite-icon.vue";

export const MAIN_NAV_ITEMS: INavItem[] = [
  { label: "Популярное", iconComponent: Flame, route: routes.popular },
  { label: "Новое", iconComponent: Lightning, route: routes.new },
  {
    label: "Мои подписки",
    iconComponent: CircledCheckmark,
    route: routes.mySubscriptions,
  },
  { label: "Сохранённое", iconComponent: Favorite, route: routes.favorites },
  { label: "Все дневники", iconComponent: Diaries, route: routes.diaries },
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

export const POST_TYPES_MAP: Record<PostType, string> = {
  journal: "Дневник",
  blog: "Блог",
  portfolio: "Портфолио",
};

export const TURNKEY_CATEGORY_MENU_ITEM_ID = "turnkey"
// export const ALL_SERVICES_MENU_ITEM_ID = "all"

export const CONTRACTOR_MENU_ITEMS: (IContractorsMenuNavItem | MenuItem)[] = [
  { id: TURNKEY_CATEGORY_MENU_ITEM_ID, label: "Ремонт под ключ", iconComponent: StarsIcon, route: "/contractors/categories/turnkey" },
  { id: "7o5wm6npw8drqbd", label: "Отделочные работы", iconComponent: PaintRollerIcon, route: "/contractors/categories/7o5wm6npw8drqbd" },
  { id: "68kznix4bmmp6sf", label: "Инженерные системы", iconComponent: SpannerIcon, route: "/contractors/categories/68kznix4bmmp6sf" },
  { id: "ldp19ro8ghy5pkl", label: "Строительные работы", iconComponent: DrillIcon, route: "/contractors/categories/ldp19ro8ghy5pkl" },
  { id: "lpug8esrao9bigm", label: "Дизайн и проектирование", iconComponent: CompassIcon, route: "/contractors/categories/lpug8esrao9bigm" },
  { id: "yjjzt0h4bg1dw0k", label: "Разное", iconComponent: MeasureTapeIcon, route: "/contractors/categories/yjjzt0h4bg1dw0k" },
  // { id: ALL_SERVICES_MENU_ITEM_ID, label: "Все услуги", iconComponent: GridIcon },
  { separator: true },
  {
    label: "Сохранённое",
    iconComponent: FavoriteIcon,
  },
] as const;
