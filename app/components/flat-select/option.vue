<template>
  <div class="flex gap-2 p-3 lg:p-0">
    <div v-if="imageUrl" class="w-12 h-10 rounded-sm overflow-hidden">
      <img :src="imageUrl" alt="изображение квартиры"  class="w-full h-full"/>
    </div>
    <div>
      <p class="text-xs mb-1">{{ type }}</p>
      <p class="lg:text-base font-semibold">{{ name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageUrl?: string;
  type: string;
  name: string;
}>();
</script>
