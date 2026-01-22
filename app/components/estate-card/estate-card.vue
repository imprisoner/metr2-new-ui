<template>
  <NuxtLink :to="`/flats/${id}`" class="flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <h3 class="text-4xl font-semibold">{{ name }}</h3>
      <UiButtonEdit v-if="isOwner" class="w-8 h-8" />
    </div>
    <div v-if="tags?.length" class="flex gap-2">
      <UiChip v-for="item in tags" size="sm" :label="item" />
    </div>
    <UiImagesGrid :images="MOCK_IMAGES"/>
    <div v-if="isOwner" class="flex gap-2 flex-col lg:flex-row">
      <UiButtonAdd label="Новая запись" />
      <PButton outlined severity="secondary" label="Все записи" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type{ IEstateItemProps } from '~/types/ui.types';
import { MOCK_IMAGES } from "~/const/mock";

defineProps<IEstateItemProps & {isOwner?: boolean}>();

</script>

