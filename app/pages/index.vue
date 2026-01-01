<template>
  <div class="flex flex-col gap-4 pb-10">
    <PostCard v-for="i in 4" />
    <RecommendedSection title="Вам может быть интересно" :with-button="false"/>
  </div>
</template>

<script setup lang="ts">
</script>
