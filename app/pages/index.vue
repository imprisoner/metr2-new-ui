<template>
  <div class="flex flex-col gap-4 pb-10">
    <PostCard v-for="post in firstPosts" :key="post.id" v-bind="post" />
    <UiSheet>
      <WidgetPostPreviewSection
        title="Вам может быть интересно"
        with-button
        block-button
        button-label="Показать ещё"
        :items="RECOMMENDED_POSTS"
      />
    </UiSheet>
    <PDeferredContent v-if="totalPages > 1" @load="next"/>
    <PDeferredContent v-for="i in restPostsTotalPages" :key="i" @load="next" class="flex flex-col gap-4 max-w-full">
      <PostCard v-for="post in getPostsSlice(i)" :key="post.id" v-bind="post" :flat-name="`${post.flatName}`" />
    </PDeferredContent>
  </div>
</template>

<script setup lang="ts">
import { RECOMMENDED_POSTS } from "~/const/mock";

definePageMeta({
  alias: ['/popular']
})

const { posts, next, totalPages, pageSize } = usePopularPostsList();

await next();

const firstPosts = [...posts.value.slice(0, 3)];
const restPosts = computed(() => posts.value.slice(3));

const restPostsTotalPages = computed(() => restPosts.value.length / pageSize.value);

const getPostsSlice = (page: number) => {
  const start = page * pageSize.value;
  const end = start + pageSize.value;
  return restPosts.value.slice(start, end);
};
</script>

