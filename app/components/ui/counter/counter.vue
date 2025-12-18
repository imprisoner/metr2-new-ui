<template>
  <div
    class="flex gap-2 text-custom-secondary text-base font-semibold items-center"
  >
    <div class="w-6 h-6">
      <Component :is="icons[type]" class="w-full h-full" />
    </div>
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import CommentIcon from "~/components/icons/comment.vue";
import FavoriteIcon from "~/components/icons/favorite.vue";
import HeartIcon from "~/components/icons/heart.vue";

type CounterType = "comments" | "favorites" | "likes";

const icons: Record<CounterType, Component> = {
  "comments": CommentIcon,
  "favorites": FavoriteIcon,
  "likes": HeartIcon,
};

defineProps<{
  type: CounterType;
  count: number;
}>();
</script>

