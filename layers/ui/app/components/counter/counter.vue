<template>
  <div
    class="flex gap-2 text-custom-secondary text-base font-semibold items-center"
  >
    <div
      :class="{
        'w-5 h-5': size === 'sm',
        'w-6 h-6': size === 'normal',
      }"
    >
      <Component :is="icons[type]" class="w-full h-full" />
    </div>
    <span v-if="!!count">{{ count }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import CommentIcon from "#layers/ui/app/icons/comment-icon.vue";
import FavoriteIcon from "#layers/ui/app/icons/favorite-icon.vue";
import HeartIcon from "#layers/ui/app/icons/heart-icon.vue";

type CounterType = "comments" | "favorites" | "likes";

const icons: Record<CounterType, Component> = {
  comments: CommentIcon,
  favorites: FavoriteIcon,
  likes: HeartIcon,
};

const { size = "normal" } = defineProps<{
  type: CounterType;
  count?: number;
  size?: "sm" | "normal";
}>();
</script>

