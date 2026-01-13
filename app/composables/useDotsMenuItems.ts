import type { IUserMenuButton, IUserMenuDivider } from "~/types/ui.types";

import CircledCheckmark from "#layers/ui/app/icons/circled-checkmark-icon.vue";
import ArrowIcon from "#layers/ui/app/icons/arrow-icon.vue";
import SlashedEyeIcon from "#layers/ui/app/icons/slashed-eye-icon.vue";
import CircledCrossIcon from "#layers/ui/app/icons/circled-cross-icon.vue";
import FlagIcon from "#layers/ui/app/icons/flag-icon.vue";

export const useDotsMenuItems = () => {
  const { openDialog } = useDialogStore();

  const ComplaintForm = defineAsyncComponent(
    () => import("~/components/form/complaint.vue")
  );

  const SendMessageForm = defineAsyncComponent(
    () => import("~/components/form/send-message.vue")
  );

  const COMMON_ITEMS: (IUserMenuDivider | IUserMenuButton)[] = [
    {
      type: "button",
      props: { label: "Подписаться", icon: CircledCheckmark },
      handler: () => {
        /* TODO */
      },
    },
    {
      type: "button",
      props: { label: "Сообщение", icon: ArrowIcon },
      handler: () => {
        openDialog(SendMessageForm);
      },
    },
    { type: "divider", props: { direction: "horizontal" } },
    {
      type: "button",
      props: { label: "Скрыть из моей ленты", icon: SlashedEyeIcon },
      handler: () => {
        /** TODO */
      },
    },
    {
      type: "button",
      props: { label: "Пожаловаться", icon: FlagIcon },
      handler: () => {
        openDialog(ComplaintForm);
      },
    },
  ];
  
  const DESKTOP_ITEMS: (IUserMenuDivider | IUserMenuButton)[] = [
    { type: "divider", props: { direction: "horizontal" } },
    { type: "button", props: { label: "Отписаться", icon: CircledCrossIcon } },
  ];

  const { isDesktop } = useDevice();

  let dotsMenuItems = [...COMMON_ITEMS]

  if (isDesktop) {
    dotsMenuItems = dotsMenuItems.concat(DESKTOP_ITEMS)
  }

  return {
    dotsMenuItems,
  };
};

