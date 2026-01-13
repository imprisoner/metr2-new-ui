<template>
  <PSelect v-bind="$props" :dt="dt" :pt="{
    label: 'text-base font-semibold',
    dropdownIcon: 'w-3.5 h-3.5',
    root: 'items-center gap-2',
    option: 'text-base'
  }">
    <template #dropdownicon>
      <ChevronDownIcon />
    </template>
  </PSelect>
</template>

<script setup lang="ts">
import type { SelectDesignTokens } from "@primeuix/themes/types/select";
import type { SelectProps } from "primevue";

defineProps<SelectProps>();

const dt:SelectDesignTokens =  {
  root: {
    borderColor: 'transparent',
    paddingX: '0',
    paddingY: '0',
    background: 'transparent',
    hoverBorderColor: 'transparent',
    focusRing: {
      color: 'transparent',
      shadow: '0 0 0 0',
      width: '0'
    },
    focusBorderColor: 'transparent',
  },
  option: {
    padding: '8px 12px',
  },
  dropdown: {
    width: '14px'
  }
}
</script>
