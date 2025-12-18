<template>
  <div>
    <div class="flex flex-col gap-4">
      <template v-for="(card, index) in recommended" :key="index">
        <RecommendedCard v-bind="card" />
        <hr v-if="!isLast(index)" class="w-full text-custom-divider" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RECOMMENDED_POSTS } from "~/components/const/mock";

definePageMeta({
  layout: "responsive",
});

const recommended = RECOMMENDED_POSTS;

const isLast = (index: number) => {
  return index === recommended.length - 1;
};
</script>

<style scoped></style>
