<template>
  <UiSheet class="flex flex-col gap-6">
    <p v-if="title" class="text-base text-custom-secondary font-semibold">
      {{ title }}
    </p>

    <div class="flex flex-col gap-4">
      <template v-for="(card, index) in recommended" :key="index">
        <RecommendedCard v-bind="card" />
        <hr v-if="!isLast(index)" class="w-full text-custom-divider" />
      </template>
    </div>

    <PButton outlined severity="secondary" label="Показать ещё" />
  </UiSheet>
</template>

<script setup lang="ts">
import { RECOMMENDED_POSTS } from '~/const/mock';

defineProps<{ title?: string }>();

const recommended = RECOMMENDED_POSTS

const isLast = (index: number) => {
  return index === recommended.length - 1;
};


</script>

<style scoped></style>

