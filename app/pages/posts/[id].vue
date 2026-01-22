<template>
  <div class="text-center">
    <h1 class="text-5xl font-bold">Пост {{ postId }}</h1>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute('posts-id');

  const postId = route.params.id;
</script>

<style scoped>

</style>