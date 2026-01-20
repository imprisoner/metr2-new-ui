<template>
  <div class="flex flex-col gap-6">
    <p v-if="title" class="text-base text-custom-secondary font-semibold">
      {{ title }}
    </p>

    <WidgetPostPreviewSectionMobileCarousel v-if="isMobile" :items />
    <div v-else class="flex flex-col gap-4">
      <template v-for="(card, index) in visibleItems" :key="index">
        <PostPreviewCard v-bind="card" :with-author />
        <UiDivider v-if="!isLast(index)" class="w-full text-custom-divider" />
      </template>
    </div>

    <PButton
      v-if="withButton && !showAll"
      outlined
      severity="secondary"
      :label="buttonLabel"
      :class="{ 'self-start': !blockButton }"
      @click="showAll = true"
    />
  </div>
</template>

<script setup lang="ts">
import type { IPostPreviewEntity } from "~/types/ui.types";

const {
  visibleItemsCount = 2,
  buttonLabel = "Все работы",
  items,
  withAuthor = true,
} = defineProps<{
  title?: string;
  withButton?: boolean;
  withAuthor?: boolean;
  buttonLabel?: string;
  blockButton?: boolean;
  visibleItemsCount?: number;
  items: IPostPreviewEntity[];
}>();

const { isMobile } = useDevice();

const showAll = ref(false);

const visibleItems = computed(() => {
  if (!showAll.value) return items.slice(0, visibleItemsCount);

  return items;
});

const isLast = (index: number) => {
  return index === visibleItems.value.length - 1;
};
</script>
