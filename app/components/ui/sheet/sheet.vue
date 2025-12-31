<template>
  <section class="p-4 lg:p-6 shadow-custom-card rounded-lg bg-white">
    <div class="flex gap-2 text-5xl font-semibold">
      <h2 v-if="title">{{ title }}</h2>
      <span class="text-custom-secondary" v-if="!!count">{{ count }}</span>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    title?: string;
    count?: number;
  }>()
</script>

<style scoped>

</style>