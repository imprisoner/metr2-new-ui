<template>
  <div
    class="border-custom-divider flex flex-1"
    :class="{
      'border-t': direction === 'horizontal',
      'border-l': direction === 'vertical',
    }"
  ></div>
</template>

<script setup lang="ts">
const { direction = "horizontal" } = defineProps<{
  direction?: "horizontal" | "vertical";
}>();
</script>

<style scoped></style>

