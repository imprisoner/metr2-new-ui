<template>
  <ProfilePageSectionWrapper title="Отзывы" :count="10">
    <div v-if="feedbacks.length > 0" class="flex flex-col gap-4 lg:gap-6">
      ОТЗЫВЫ
    </div>
    <UiNoItemsSection
      v-else
      class="gap-4! lg:gap-6!"
      v-bind="noItemSectionProps"
    >
      <template v-if="!isOwner" #button>
        <PButton
          outlined
          severity="secondary"
          label="Оставить отзыв"
          @click="addFeedback"
        />
      </template>
    </UiNoItemsSection>
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
import type { INoItemsSectionProps } from "~/types/ui.types";

const addFeedback = () => {};

const feedbacks = [];

const { isOwner } = storeToRefs(useAuthStore());

const noItemSectionProps = computed<INoItemsSectionProps>(() => {
  if (isOwner.value) {
    return {
      title: "Отзывов пока нет",
      subtitle:
        "Как только клиенты оценят ваши услуги или работы, они появятся здесь.",
      icon: "smile",
    };
  }

  return {
    title: undefined,
    subtitle: "Отзывов пока нет. Будьте первым!",
    icon: "sad",
  };
});
</script>
