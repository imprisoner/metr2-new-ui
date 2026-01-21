import { PostsTypeOptions } from "~/types/pocketbase-types";
import type { IUserMenuButton, IUserMenuDivider } from "~/types/ui.types";
import ArrowIcon from "#layers/ui/app/icons/arrow-icon.vue";
import BookIcon from "#layers/ui/app/icons/book-icon.vue";
import CardIcon from "#layers/ui/app/icons/card-icon.vue";
import DiariesIcon from "#layers/ui/app/icons/diaries-icon.vue";
import PicDoubleIcon from "#layers/ui/app/icons/pic-double-icon.vue";
import SheetWithPencilIcon from "#layers/ui/app/icons/sheet-with-pencil-icon.vue";
import StarIcon from "#layers/ui/app/icons/star-icon.vue";
import UserIcon from "#layers/ui/app/icons/user-icon.vue";

export const useUserMenu = () => {
  const { userInfo } = storeToRefs(useAuthStore());

  const items = shallowRef<(IUserMenuDivider | IUserMenuButton)[]>([
    {
      type: "button",
      props: {
        to: "/diaries",
        label: "Дневники",
        icon: DiariesIcon,
        quickAccess: { type: PostsTypeOptions.journal },
      },
    },
    {
      type: "button",
      props: {
        to: "#",
        label: "Блог",
        icon: BookIcon,
        quickAccess: { type: PostsTypeOptions.blog },
      },
    },
    {
      type: "button",
      props: {
        to: "#",
        label: "Портфолио",
        icon: PicDoubleIcon,
        quickAccess: { type: PostsTypeOptions.portfolio },
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
        to: `/users/${userInfo.value.username}`,
        label: "Профиль",
        icon: UserIcon,
      },
    },
  ]);

  return {
    items
  }
};
