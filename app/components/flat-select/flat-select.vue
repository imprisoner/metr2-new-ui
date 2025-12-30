<template>
  <PSelect
    v-bind="$props"
    fluid
    variant="filled"
    class="rounded-lg"
    :dt="dt"
    :pt="{
      overlay: 'hidden lg:block',
    }"
    @show="showBottomDrawer"
  >
    <template #value="{ value }">
      <FlatSelectOption v-if="value" v-bind="value" />
    </template>
    <template #option="{ option }">
      <FlatSelectOption v-bind="option" />
    </template>
    <template #footer>
      <UiButtonAdd
        :button-props="{ text: true, fluid: true }"
        @click="handleAddFlat"
      />
    </template>
  </PSelect>
  <UiBottomDrawer v-model:visible="isBottomDrawerVisible">
    <FlatSelectOption v-for="option in flats" v-bind="option" />
    <UiDivider />
    <UiButtonAdd :button-props="{ text: true, fluid: true}" class="mb-2.5"/>
  </UiBottomDrawer>
</template>

<script setup lang="ts">
import type { SelectDesignTokens } from "@primeuix/themes/types/select";
import type { SelectProps } from "primevue";
import type { FlatOption } from "~/types/ui.types";

defineProps<SelectProps & { flats: FlatOption[] }>();

// defineEmits<{ (e: "show"): void }>();

const dt: SelectDesignTokens = {
  root: {
    filledBackground: "#EFF3F8",
    borderColor: "transparent",
    filledHoverBackground: "#EFF3F8",
    filledFocusBackground: "#EFF3F8",
    hoverBorderColor: "transparent",
    focusBorderColor: "transparent",
  },
  overlay: {
    borderRadius: "8px",
    borderColor: "transparent",
    shadow: "0 2px 12px 0 #0000001A",
  },
  list: {
    padding: "6px 4px",
  },
  option: {
    focusBackground: "#F6F9FC",
    borderRadius: "4px",
    padding: "0.875rem 1.125rem",
  },
};

const handleAddFlat = () => {};

const isBottomDrawerVisible = ref(false);
const showBottomDrawer = () => {
  isBottomDrawerVisible.value = true;
};
</script>

