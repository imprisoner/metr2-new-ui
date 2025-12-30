<template>
  <div class="flex flex-col gap-4 pb-12">
    <PostCard mobile />
    <PostCard mobile />
    <PostCard mobile />
    <PostCard mobile />

    <div class="rounded-lg flex flex-col p-6 gap-6 bg-white">
      <p class="text-base text-custom-secondary mb-6 font-semibold">
        Вам может быть интересно
      </p>

      <MobileRecommendedCarousel />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "mobile",
});
</script>

<style scoped></style>
