<template>
  <ProfilePageSectionWrapper title="Отзывы" :count="10">
    <div v-if="feedbacks.length > 0" class="flex flex-col gap-4 lg:gap-6">ОТЗЫВЫ</div>
    <UiNoItemsSection
      v-else
      class="gap-4! lg:gap-6!"
      :ui-sheet-props="{ title: 'Отзывы' }"
      icon="sad"
      subtitle="Отзывов пока нет. Будьте первым!"
    >
      <template #button>
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
  const addFeedback = () => {}

  const feedbacks = []
</script>

<style scoped></style>

