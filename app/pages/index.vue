<template>
  <div class="flex flex-col gap-4 pb-10">
    <PostCard v-for="i in 4" />
    <UiSheet>
      <WidgetPostPreviewSection
        title="Вам может быть интересно"
        with-button
        block-button
        :items="RECOMMENDED_POSTS"
      />
    </UiSheet>
  </div>
</template>

<script setup lang="ts">
import { RECOMMENDED_POSTS } from '~/const/mock';
</script>

