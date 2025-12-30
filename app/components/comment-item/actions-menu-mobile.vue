<template>
  <UiBottomDrawer v-model:visible="visible" class="pb-4">
    <template v-for="(item, index) in COMMENT_ACTIONS_MENU_ITEMS" :key="index">
      <UiDesktopMenuButton :item="item" />
    </template>
  </UiBottomDrawer>
</template>

<script setup lang="ts">
import { COMMENT_ACTIONS_MENU_ITEMS } from "~/const";

const visible = defineModel<boolean>("visible");
</script>

<style scoped></style>
