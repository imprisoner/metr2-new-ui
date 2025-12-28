<template>
  <article class="rounded-lg border-custom-surface-border border flex-1 shrink-0">
    <!-- top section -->
    <div
      class="flex h-10 justify-between items-center bg-custom-surface-ground p-3"
      :class="{ 'flex-row-reverse': type === 'next' }"
    >
      <div class="flex gap-1 items-center text-custom-secondary">
        <Component :is="type === 'next' ? ChevronRightIcon : ChevronLeftIcon" />
        <span class="text-base font-semibold">
          {{ type === 'next' ? 'Следующий' : 'Предыдущий' }} пост
        </span>
      </div>
      <p>{{ publishDate }}</p>
    </div>
    <!-- top end -->

     <!-- body -->
     <div class="flex gap-4 items-center p-3">
      <div v-if="imageUrl" class="flex rounded-sm overflow-hidden h-22 w-28 shrink-0">
        <img :src="imageUrl" alt="" class="w-full h-full object-cover">
      </div>
      <h5 class="text-base font-semibold">{{ title }}</h5>
     </div>
     <!-- body end -->
  </article>
</template>

<script setup lang="ts">
import ChevronLeftIcon from "../icons/chevron-left.vue";
import ChevronRightIcon from "../icons/chevron-right.vue";

defineProps<{
  type: "next" | "prev";
  title: string;
  publishDate: string;
  imageUrl?: string;
  href: string;
}>();
</script>

<style scoped></style>

