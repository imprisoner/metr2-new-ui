<template>
  <div class="rounded-lg flex flex-col p-4 lg:p-6 gap-6 bg-white">
    <!-- TOP -->
    <div class="flex flex-col gap-4">
      <UserSection v-bind="userSection" :mobile="mobile" />
      <NuxtLink :to="postLink">
        <h3 class="text-4xl font-semibold">{{ title }}</h3>
      </NuxtLink>
      <div class="flex gap-1">
        <UiChip v-for="tag in mockTags" size="sm" :key="tag" :label="tag" />
      </div>
    </div>
    <!-- BODY -->
    <UiImagesGrid v-if="images.length > 0" :images="images" class="h-75" />
    <div class="flex flex-col gap-2 text-xl">
      <p class="truncate-6-lines max-w-full">
        {{ extractedText }}
      </p>
      <NuxtLink :to="postLink" class="font-semibold">Читать далее</NuxtLink>
    </div>
    <!-- BOTTOM -->
    <PostCardCommentsArea v-bind="commentsSection"/>
  </div>
</template>

<script setup lang="ts">
import UserSection from "../user-section/user-section.vue";
import type {
  IPostCardEntity,
  IPostCardUserSectionProps,
} from "~/types/ui.types";

const {
  authorAvatar,
  authorUsername,
  flatId,
  flatName,
  publishDate,
  type,
  content_json,
  id,
  lastComments,
  commentsCount,
  likesCount
} = defineProps<IPostCardEntity>();

const mockTags = ["Студия", "Ремонт", "Лофт", "Квартира"];

const userSection: IPostCardUserSectionProps = {
  username: authorUsername,
  avatar: authorAvatar,
  flatId,
  flatName,
  publishDate: publishDate as string,
  type,
};

const extractedText = extractTextFromBlocks(content_json, 470);
const postLink = `/posts/${id}`;

const commentsSection = {
  lastComments,
  commentsCount,
  likesCount,  
  favoritesCount: 0 /* TODO hardcoded */,
}
</script>

<style scoped>
.truncate-6-lines {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
