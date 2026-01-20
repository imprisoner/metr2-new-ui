<template>
  <div class="flex flex-col gap-6">
    <EstateCard v-bind="estate" :is-owner />
    <div v-if="!isOwner && posts.length" class="flex gap-2 flex-col lg:flex-row">
      <UiButtonAdd label="Новая запись" />
      <PButton outlined severity="secondary" label="Все записи" />
    </div>
    <WidgetPostPreviewSection
      v-if="!isOwner && posts.length"
      title="Последние записи в дневнике"
      with-button
      button-label="Все записи"
      :with-author="false"
      class="p-0! gap-4!"
      :items="posts"
    />
  </div>
</template>

<script setup lang="ts">
import type { IEstateWithPosts } from "~/types/ui.types";

const { estate, posts } = defineProps<IEstateWithPosts>();

const { isOwner } = storeToRefs(useUsersPageStore());
</script>

