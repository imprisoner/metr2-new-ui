import type { DialogDesignTokens } from "@primeuix/themes/types/dialog";
import type { DialogProps } from "primevue";

export const dt: DialogDesignTokens = {
  header: {
    padding: "1rem 1rem 0 0",
  },
  root: {
    borderRadius: "10px",
  },
  title: {
    fontSize: "21px",
  },
};

export const props: DialogProps = {
  dismissableMask: true,
  modal: true,
  blockScroll: true,
  maximizable: true,
  maximizeIcon: undefined,
  closable: true,
  dt
};
