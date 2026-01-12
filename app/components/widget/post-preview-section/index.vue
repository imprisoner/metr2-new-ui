<template>
  <div class="flex flex-col gap-6">
    <p v-if="title" class="text-base text-custom-secondary font-semibold">
      {{ title }}
    </p>

    <WidgetPostPreviewSectionMobileCarousel v-if="isMobile" :items />
    <div v-else class="flex flex-col gap-4">
      <template v-for="(card, index) in items" :key="index">
        <PostPreviewCard v-bind="card" />
        <hr v-if="!isLast(index)" class="w-full text-custom-divider" />
      </template>
    </div>

    <PButton
      v-if="withButton"
      outlined
      severity="secondary"
      :label="buttonLabel"
      :class="{ 'self-start': !blockButton }"
    />
  </div>
</template>

<script setup lang="ts">
import type { IPostPreviewEntity } from '~/types/ui.types';

const { buttonLabel = "Все работы", items } = defineProps<{
  title?: string;
  withButton?: boolean;
  buttonLabel?: string;
  blockButton?: boolean;
  items: IPostPreviewEntity[];
}>();

const isLast = (index: number) => {
  return index === items.length - 1;
};

const { isMobile } = useDevice();
</script>
