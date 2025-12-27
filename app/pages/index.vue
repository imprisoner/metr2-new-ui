<template>
  <div class="flex flex-col gap-4">
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />

    <div class="rounded-lg flex flex-col p-6 gap-6 bg-white">
      <p class="text-base text-custom-secondary mb-6 font-semibold">
        Вам может быть интересно
      </p>

      <div class="flex flex-col gap-4">
        <template v-for="(card, index) in recommended" :key="index">
          <RecommendedCard v-bind="card" />
          <hr v-if="!isLast(index)" class="w-full text-custom-divider" />
        </template>
      </div>

      <PButton outlined severity="secondary" label="Показать ещё" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MOCK_IMAGES, RECOMMENDED_POSTS } from "~/const/mock";

const recommended = RECOMMENDED_POSTS

const isLast = (index: number) => {
  return index === recommended.length - 1;
};
</script>

<style scoped></style>

