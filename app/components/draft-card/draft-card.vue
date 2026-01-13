<template>
  <div class="flex flex-col gap-4 lg:flex-row bg-white  relative w-full">
    <div v-if="imageUrl" class="shrink-0 rounded-md w-60 h-42 lg:w-50 lg:h-35 overflow-hidden hidden lg:flex">
      <img :src="imageUrl" alt="" class="object-cover w-full h-full" />
    </div>
    <div class="flex flex-col gap-2 lg:flex-1 pe-12">
      <span class="text-base font-semibold">{{ type }}</span>
      <p class="lg:flex-1 text-xl font-semibold">{{ title }}</p>
      <PTag severity="danger" value="Не опубликовано" class="w-fit" :dt="dt"/>
      <p class="text-base text-custom-secondary">{{ createdAt }}</p>
    </div>
    <PButton text severity="secondary" class="absolute top-0 right-0">
      <template #icon>
        <PencilIcon />
      </template>
    </PButton>
    <!-- <div class="w-10 h-10 p-7">
    </div> -->
  </div>
</template>

<script setup lang="ts">
import type { TagDesignTokens } from '@primeuix/themes/types/tag';

defineProps<{
  imageUrl?: string;
  type: string;
  title: string;
  createdAt: string;
}>();

const dt: TagDesignTokens = {
  danger: {
    background: '#FEE2E2',
    color: '#B91C1C'
  },
  root: {
    padding: '.25rem .375rem',fontWeight: '400', fontSize: '10.5px'
  },

}
</script>
