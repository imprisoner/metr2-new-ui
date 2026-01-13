<template>
  <PDrawer
    v-model:visible="visible"
    position="bottom"
    style="height: auto"
    :show-close-icon="false"
    block-scroll
    :dt="dt"
    :pt="{
      root: {
        class: 'rounded-t-xl',
      },
    }"
  >
    <slot />
  </PDrawer>
</template>

<script setup lang="ts">
import type { DrawerDesignTokens } from "@primeuix/themes/types/drawer";

const visible = defineModel<boolean>("visible");

const dt: DrawerDesignTokens = {
  content: {
    padding: "1.25rem .5rem 0",
  },
  header: {
    padding: "0",
  },
};
</script>

