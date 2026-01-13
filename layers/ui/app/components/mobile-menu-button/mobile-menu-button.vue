<template>
  <PButton
    :label="label"
    severity="secondary"
    text
    class="justify-start w-full rounded-none"
    :dt="dt"
    :pt="{
      label: {
        class: 'text-[16px]'
      }
    }"
  >
    <template #icon v-if="icon">
      <Component :is="icon" class="h-5 w-5 text-custom-icon" />
    </template>
  </PButton>
</template>

<script setup lang="ts">
import type { ButtonDesignTokens } from "@primeuix/themes/types/button";
import type { Component } from "vue";

const dt: ButtonDesignTokens = {
  root: {
    label: {
      fontWeight: "medium",
    },
    paddingX: ".75rem",
    paddingY: ".75rem",
  },
  colorScheme: {
    light: {
      text: {
        secondary: {
          color: "{primary.500}",
        },
      },
    },
  },
};

const props = defineProps<{
  label: string;
  icon?: Component;
}>();
</script>

