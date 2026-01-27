<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-4xl font-semibold leading-none">
      {{ name }}
    </h2>
    <div class="flex items-center gap-2 text-base">
      <span class="font-semibold inline-flex">{{ city }}</span>
      <div class="text-custom-secondary inline-flex items-center gap-1">
        <span class="w-2 h-2 rounded-full bg-green-500"></span>
        {{ status }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  city: string;
  status: string;
}>();
</script>
