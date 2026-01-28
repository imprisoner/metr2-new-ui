<template>
  <div class="flex items-center gap-2">
    <slot name="icon" />
    <PSelect
      :options
      :default-value
      :dt="selectDT"
      :pt="{ dropdownIcon: 'w-3.5 h-3.5', root: 'gap-2', label: 'text-base' }"
    >
      <template #dropdownicon>
        <ChevronDownIcon />
      </template>
    </PSelect>
  </div>
</template>

<script setup lang="ts">
import type { SelectDesignTokens } from "@primeuix/themes/types/select";
import type { SelectProps } from "primevue";

defineProps<{
  options: SelectProps["options"];
  defaultValue?: SelectProps["defaultValue"];
}>();

const selectDT: SelectDesignTokens = {
  root: {
    paddingX: "0",
    paddingY: "0",
    borderColor: "transparent",
    hoverBorderColor: "transparent",
    focusBorderColor: "transparent",
    focusRing: {
      width: "0",
      color: "transparent",
      offset: "0",
      shadow: "none"
    }
  },
  dropdown: {
    width: "fit",
  },
  option: {
    padding: "4px"
  }
};
</script>

