<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <h3 class="text-4xl font-semibold">{{ name }}</h3>
      <UiButtonEdit v-if="isOwner" class="w-8 h-8" />
    </div>
    <div class="flex gap-2">
      <UiChip v-for="item in tags" size="sm" :label="item" />
    </div>
    <UiImagesGrid />
    <div v-if="isOwner" class="flex gap-2 flex-col lg:flex-row">
      <UiButtonAdd label="Новая запись" />
      <PButton outlined severity="secondary" label="Все записи"/>
    </div>
    <WidgetPostPreviewSection
      v-else
      title="Последние записи в дневнике"
      with-button
      button-label="Все записи"
      class="p-0! gap-4!"
      :items="RECOMMENDED_POSTS"
    />
  </div>
</template>

<script setup lang="ts">
import { RECOMMENDED_POSTS } from "~/const/mock";

defineProps<{
  name: string;
  tags: string[];
}>();

const { isOwner } = storeToRefs(useAuthStore());
</script>
