<template>
  <div class="flex gap-1">
    <PButton
      outlined
      severity="secondary"
      label="Подписаться"
      class="hidden lg:inline-flex"
    />
    <div class="relative">
      <PostCardMoreMenu :mobile="mobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ mobile?: boolean }>();
</script>

<style scoped></style>

