<template>
  <ProfilePageSectionWrapper title="Портфолио" :count="5">
    <RecommendedSection
      with-button
      button-label="Все работы"
      :block-button="false"
      class="gap-4! lg:gap-6!"
    />
    <UiNoItemsSection
      class="gap-4! lg:gap-6!"
      icon="smile"
      title="Пора добавить первую запись"
      subtitle="Ваше портфолио пока пусто."
    >
      <template #button>
        <PButton
          outlined
          severity="secondary"
          label="Написать"
          @click="addPortfolio"
        />
      </template>
    </UiNoItemsSection>
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
  const addPortfolio = () => {}
</script>

