<template>
  <div class="flex gap-2 text-xl font-semibold">
    <span class="flex items-center gap-1.5">
      <StarFilledIcon class="w-4 h-4 text-[#FFB900]" />
      <span class="flex">{{ rating }}</span>
    </span>
    <span class="flex items-center gap-1 font-semibold">
      <CommentAltIcon class="w-6 h-6" />
      <span class="flex">{{ feedbacksCount }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  rating: number;
  feedbacksCount: number;
}>();</script>
