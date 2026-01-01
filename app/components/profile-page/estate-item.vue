<template>
  <div class="flex flex-col gap-4">
    <h3 class="text-4xl font-semibold">{{ name }}</h3>
    <div class="flex gap-2">
      <UiSmallChip v-for="item in tags" :label="item" />
    </div>
    <ImagesGrid />
    <RecommendedSection
      title="Последние записи в дневнике"
      button-label="Все записи"
      class="p-0! gap-4!"
    />
  </div>
</template>

<script setup lang="ts">
import ImagesGrid from '../ui/images-grid/images-grid.vue';

  defineProps<{
    name: string;
    tags: string[]
  }>();
</script>

<style scoped></style>

