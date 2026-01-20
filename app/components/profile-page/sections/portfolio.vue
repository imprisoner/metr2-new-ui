<template>
  <ProfilePageSectionWrapper
    title="Портфолио"
    :count="posts.length"
    :show-button="posts.length > 0"
  >
    <WidgetPostPreviewSection
      v-if="posts.length"
      :items="posts as IPostPreviewEntity[]"
      :with-button="false"
      :block-button="false"
      :with-author="false"
      :visible-items-count="3"
      button-label="Все работы"
    />
    <UiNoItemsSection
      v-else
      v-bind="noItemSectionProps"
      :with-button="isOwner"
      class="gap-4! lg:gap-6!"
    />
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
import { getPostsListByUserId } from "~/api/posts";
import type { PostPreviewDto } from "~/dto/posts.dto";
import { PostsTypeOptions } from "~/types/pocketbase-types";
import type { INoItemsSectionProps, IPostPreviewEntity } from "~/types/ui.types";

const addPortfolio = () => {
  /**TODO call post creation form */
};

const posts = ref<PostPreviewDto[]>([]);

const { pageData, isOwner } = storeToRefs(useUsersPageStore());
posts.value = await getPostsListByUserId({
  userId: pageData.value!.userId,
  postType: PostsTypeOptions.portfolio,
});

const noItemSectionProps = computed<INoItemsSectionProps>(() => {
  if (isOwner.value) {
    return {
      title: "Пора добавить первую запись",
      subtitle: "Ваше портфолио пока пусто.",
      icon: "smile",
    };
  }

  return {
    title: undefined,
    subtitle: "Здесь ещё нет записей.",
    icon: "sad",
  };
});
</script>

