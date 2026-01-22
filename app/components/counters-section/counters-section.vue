<template>
  <div class="flex justify-between">
    <div class="flex gap-2 items-center">
      <p class="hidden lg:block text-xl font-semibold">Комментарии</p>
      <UiCounter type="comments" :count="comments" />
    </div>
    <div class="flex gap-4">
      <UiCounter type="favorites" :count="favorites" />
      <UiCounter type="likes" :count="likes" />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    likes: number;
    comments: number;
    favorites: number;
  }>();
</script>
