<template>
  <ProfilePageSectionWrapper
    title="Блог"
    :count="5"
    class="flex flex-col gap-4! lg:gap-6!"
  >
    <WidgetPostPreviewSection :items="RECOMMENDED_POSTS" />
    <div class="flex gap-2 flex-col lg:flex-row">
      <UiButtonAdd label="Новая запись" />
      <PButton outlined severity="secondary" label="Все записи" />
    </div>
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
import { RECOMMENDED_POSTS } from '~/const/mock';

</script>

