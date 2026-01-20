<template>
  <ProfilePageSectionWrapper title="Портфолио" :count="5">
    <WidgetPostPreviewSection
      v-if="posts.length"
      :items="posts as IPostPreviewEntity[]"
      :with-button="false"
      :block-button="false"
      :with-author="false"
      button-label="Все работы"
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
import { getFullPortfolioListByUserId } from "~/api/posts";
import type { PostPreviewDto } from "~/dto/posts.dto";
import type { IPostPreviewEntity } from "~/types/ui.types";

const addPortfolio = () => {
  /**TODO call post creation form */
};

const posts = ref<PostPreviewDto[]>([]);

const { pageData } = storeToRefs(useUsersPageStore());

posts.value = await getFullPortfolioListByUserId(pageData.value?.userId);
</script>

