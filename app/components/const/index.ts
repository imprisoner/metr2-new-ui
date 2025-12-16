import CircledCheckmark from "../icons/circled-checkmark.vue";
import Diaries from "../icons/diaries.vue";
import Favorite from "../icons/favorite.vue";
import Flame from "../icons/flame.vue";
import Lightning from "../icons/lightning.vue";

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