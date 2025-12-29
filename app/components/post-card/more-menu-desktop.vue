<template>
  <UiSmallModalLayout v-if="visible">
    <template v-for="(item, index) in POST_CARD_MORE_MENU_ITEMS" :key="index">
      <UiDesktopMenuButton :item="item" />
    </template>
  </UiSmallModalLayout>
</template>

<script setup lang="ts">
import { POST_CARD_MORE_MENU_ITEMS } from "~/const";

const visible = defineModel<boolean>("visible");
</script>

