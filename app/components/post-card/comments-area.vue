<template>
  <div class="flex flex-col gap-4">
    <!-- counters -->
    <CountersSection
      :likes="likesCount"
      :comments="commentsCount"
      :favorites="favoritesCount"
    />
    <!--  -->
    <div class="flex flex-col gap-4">
      <PostCardCommentPreview
        v-for="(comment, index) in lastComments"
        :key="index"
        v-bind="comment"
      />
      <div v-if="isAuthorized" class="flex gap-3 items-start">
        <UiUserAvatar label="U" shape="circle" class="shrink-0 mt-1" />
        <FormComment size="sm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPostCommentPreview } from "~/types/common.types";

defineProps<{
  lastComments: IPostCommentPreview[];
  commentsCount: number;
  likesCount: number;
  favoritesCount: number;
}>();

const { isAuthorized } = storeToRefs(useAuthStore());
</script>
