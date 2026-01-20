<template>
  <div class="flex flex-col gap-1">
    <span class="text-3xl font-semibold">{{ formatCount(count) }}</span>
    <span class="text-base text-custom-secondary">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ count: number }>();

const formatCount = (count: number): string => {
  if (count >= 10_000) {
    return `${Math.floor(count / 1_000)}K`;
  }

  if (count >= 1_000) {
    return count.toLocaleString("en-US").replace(/,/g, " ");
  }

  return String(count);
};
</script>
