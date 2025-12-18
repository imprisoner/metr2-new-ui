<template>
  <div class="flex gap-2 text-custom-secondary text-base font-semibold items-center">
    <div class="w-6 h-6">
      <Component :is="icon" class="w-full h-full" />
    </div>
    {{ count }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    icon: Component,
    count: number
  }>()
</script>
