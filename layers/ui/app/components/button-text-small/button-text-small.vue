<template>
  <PButton text plain size="small" :label :dt="dt">
    <template #icon>
      <slot name="icon" />
    </template>
  </PButton>
</template>

<script setup lang="ts">
import type { ButtonDesignTokens } from "@primeuix/themes/types/button";

defineProps<{
  label: string;
}>();

const dt: ButtonDesignTokens = {
  root: { sm: { paddingX: "0", paddingY: "0", fontSize: "14px" } },
};
</script>

