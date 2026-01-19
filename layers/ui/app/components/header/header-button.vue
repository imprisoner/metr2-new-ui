<template>
  <PButton
    outlined
    class="text-white rounded-full hover:border-[#FFFFFF66]! active:border-[#FFFFFF99]!"
    :class="{
      'border-[#FFFFFF33]': border,
      'border-transparent': !border
    }"
    :label
    :dt="dt"
  >
    <template v-if="icon" #icon>
      <Component :is="icon" class="w-3.5 h-3.5" />
    </template>
  </PButton>
</template>

<script setup lang="ts">
import type { ButtonDesignTokens } from "@primeuix/themes/types/button";

const { border = true } = defineProps<{
  label?: string;
  icon?: Component;
  border?: boolean;
}>();

const dt: ButtonDesignTokens = {
  outlined: {
    primary: {
      activeBackground: "transparent",
      hoverBackground: "transparent",
    },
  },
  text: {
    primary: {
      activeBackground: "transparent",
      hoverBackground: "transparent",
    },
  },
};
</script>

