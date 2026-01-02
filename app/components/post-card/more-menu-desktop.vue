<template>
  <UiSmallModalLayout v-if="visible">
    <template v-for="(item, index) in dotsMenuItems" :key="index">
      <UiDesktopMenuButton :item="item" />
    </template>
  </UiSmallModalLayout>
</template>

<script setup lang="ts">
const visible = defineModel<boolean>("visible");

const { dotsMenuItems } = useDotsMenuItems();
</script>

