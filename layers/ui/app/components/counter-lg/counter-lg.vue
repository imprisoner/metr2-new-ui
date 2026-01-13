<template>
  <div class="flex flex-col gap-1">
    <span class="text-3xl font-semibold">{{ count }}</span>
    <span class="text-base text-custom-secondary">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
  defineProps<{count: string;}>();
</script>

<style scoped>

</style>