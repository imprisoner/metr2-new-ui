import { defineStore } from "pinia";
import type { Component } from "vue";

export const useDialogStore = defineStore("dialog", () => {
  const currentComponent = shallowRef<Component>();
  const visible = ref(false);

  const openDialog = (content: Component) => {
    currentComponent.value = content;
    visible.value = true;
  };

  watch(
    () => visible.value,
    (visible) => {
      if (!visible) currentComponent.value = undefined;
    }
  );

  return {
    currentComponent,
    visible,
    openDialog
  };
});
