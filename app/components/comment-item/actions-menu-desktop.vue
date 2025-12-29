<template>
  <UiSmallModalLayout v-if="visible" @mouseleave="visible = false">
    <template v-for="(item, index) in COMMENT_ACTIONS_MENU_ITEMS" :key="index">
      <UiDesktopMenuButton :item="item" />
    </template>
  </UiSmallModalLayout>
</template>

<script setup lang="ts">
import { COMMENT_ACTIONS_MENU_ITEMS } from '~/const';

const visible = defineModel<boolean>("visible");
</script>
