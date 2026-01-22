<template>
  <div class="flex gap-3">
    <div>
      <UiUserAvatar size="normal" :image-url="authorAvatarUrl" />
    </div>
    <div class="text-custom-secondary">
      <div class="text-[12.25px] font-semibold">{{ authorName }}</div>
      <div v-html="content" class="text-base" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPostCommentPreview } from "~/types/common.types";

defineProps<IPostCommentPreview>();
</script>
