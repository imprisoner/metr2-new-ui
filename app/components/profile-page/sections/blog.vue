<template>
  <ProfilePageSectionWrapper
    title="Блог"
    :count="posts.length"
    :show-button="posts.length > 0"
    class="flex flex-col gap-4! lg:gap-6!"
  >
    <WidgetPostPreviewSection
      v-if="posts.length"
      :items="posts"
      :with-author="false"
    />
    <UiNoItemsSection
      v-else
      v-bind="noItemSectionProps"
      :with-button="isOwner"
      class="gap-4! lg:gap-6!"
    />

    <div v-if="isOwner && posts.length" class="flex gap-2 flex-col lg:flex-row">
      <UiButtonAdd label="Новая запись" />
      <PButton outlined severity="secondary" label="Все записи" />
    </div>
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
import { getPostsListByUserId } from "~/api/posts";
import type { PostPreviewDto } from "~/dto/posts.dto";
import { PostsTypeOptions } from "~/types/pocketbase-types";
import type { INoItemsSectionProps } from "~/types/ui.types";

const posts = ref<PostPreviewDto[]>([]);

const { pageData, isOwner } = storeToRefs(useUsersPageStore());
posts.value = await getPostsListByUserId({
  userId: pageData.value!.userId,
  postType: PostsTypeOptions.blog,
});

const noItemSectionProps = computed<INoItemsSectionProps>(() => {
  if (isOwner.value) {
    return {
      title: "Пора добавить первую запись",
      subtitle: "Ваш блог пока пуст.",
      icon: "smile",
    };
  }

  return {
    title: undefined,
    subtitle: "Здесь ещё нет записей.",
    icon: "sad",
  };
});

const addPortfolio = () => {};
</script>

