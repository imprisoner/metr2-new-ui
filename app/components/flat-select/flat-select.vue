<template>
  <PSelect v-bind="$props" fluid variant="filled" class="rounded-lg" :dt="dt">
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
</template>

<script setup lang="ts">
import type { SelectDesignTokens } from "@primeuix/themes/types/select";
import type { SelectProps } from "primevue";
import type { FlatOption } from "~/types/ui.types";

defineProps<SelectProps & { options: FlatOption[] }>();

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
</script>

