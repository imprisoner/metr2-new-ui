<template>
  <div class="flex flex-col gap-4 pb-10">
    <PostCard v-for="post in posts" :key="post.id" v-bind="post" />
    <UiSheet>
      <WidgetPostPreviewSection
        title="Вам может быть интересно"
        with-button
        block-button
        button-label="Показать ещё"
        :items="RECOMMENDED_POSTS"
      />
    </UiSheet>
  </div>
</template>

<script setup lang="ts">
import { getPopularPostsList } from "~/api/posts";
import { RECOMMENDED_POSTS } from "~/const/mock";

const posts = ref(
  await getPopularPostsList({
    page: 1,
    perPage: 3,
  }),
);
</script>

