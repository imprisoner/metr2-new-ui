import { defineStore } from "pinia";
import type { Component } from "vue";

export const useDialogStore = defineStore("dialog", () => {
  const currentComponent = shallowRef<Component>();
  const visible = ref(false);
  const dialogProps = reactive({
    maximize: false
  });

  const openDialog = (content: Component, maximize: boolean = false) => {
    dialogProps.maximize = maximize
    currentComponent.value = content;
    visible.value = true;
  };

  const closeDialog = (clear?: boolean) => {
    visible.value = false;

    if (clear) {
      dialogProps.maximize = false;
      currentComponent.value = undefined;
    }
  }

  return {
    currentComponent,
    visible,
    dialogProps,
    openDialog,
    closeDialog
  };
});

