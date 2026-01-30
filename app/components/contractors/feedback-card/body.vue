<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <p class="text-base">{{ text }}</p>
      <div class="pt-2">
        <div v-for="(image, index) in images" class="flex w-26 h-30 rounded-sm">
          <img :src="image" alt="" class="object-cover w-full h-full" />
        </div>
      </div>
    </div>
    <!-- Contractors comment item -->
    <div v-if="comment" class="flex gap-4">
      <UiUserAvatar :image-url="comment.user.avatarUrl" shape="square" />
      <div class="flex flex-col gap-1 text-base">
        <div class="flex gap-2">
          <span class="text-base font-semibold">{{ comment.user.name }}</span>
          <span class="text-[12.3]px text-custom-secondary">{{
            comment.date
          }}</span>
        </div>
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICommonCommentProps } from "~/types/ui.types";

defineProps<{
  text: string;
  images: string[];
  comment?:ICommonCommentProps;
}>();
</script>

