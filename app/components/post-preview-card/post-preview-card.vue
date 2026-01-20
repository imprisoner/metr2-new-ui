<template>
  <div
    class="flex flex-col gap-4 lg:flex-row bg-white max-w-60 lg:max-w-full h-87.75 lg:h-auto"
  >
    <div
      v-if="imageUrl"
      class="flex shrink-0 rounded-md w-60 h-42 lg:w-50 lg:h-35 overflow-hidden"
    >
      <img :src="imageUrl" alt="" class="object-cover w-full h-full" />
    </div>
    <div class="flex flex-col lg:gap-2 gap-4 flex-1">
      <div v-if="withAuthor" class="flex gap-2 lg:items-center">
        <UiUserAvatar :image-url="author.avatarUrl" />
        <div
          class="flex lg:gap-2 lg:items-center flex-col lg:flex-row text-base font-semibold"
        >
          <p>{{ author.name }}</p>
          <div
            class="rounded-full bg-custom-secondary w-1 h-1 hidden lg:block"
          />
          <span>{{ type }}</span>
        </div>
      </div>
      <p class="flex-1 text-xl font-semibold">{{ title }}</p>
      <div class="flex gap-4">
        <UiCounter type="comments" :count="commentsCount" />
        <UiCounter type="favorites" :count="favoritesCount" />
        <UiCounter type="likes" :count="likesCount" />
      </div>
    </div>
    <UiButtonEdit v-if="editable" class="h-8 w-8" />
  </div>
</template>

<script setup lang="ts">
import type { IPostPreviewEntity } from "~/types/ui.types";

const { withAuthor = true } = defineProps<
  IPostPreviewEntity & { withAuthor?: boolean }
>();

const editable = false;
</script>

