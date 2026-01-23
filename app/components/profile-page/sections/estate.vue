<template>
  <ProfilePageSectionWrapper title="Квартиры, дома" :count="estates.length" :show-button="estates.length > 0">
    <div v-if="estates.length > 0" class="flex flex-col gap-4 lg:gap-6">
      <template v-for="(item, index) in estates">
        <ProfilePageEstateItem v-bind="item as IEstateWithPosts" />
        <UiDivider v-if="index !== estates.length - 1" class="my-3" />
      </template>
    </div>
    <UiNoItemsSection
      v-else
      class="gap-4! lg:gap-6!"
      v-bind="noItemSectionProps"
      :with-button="isOwner"
      @button-click="showAddEstateDialog"
    />
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
import { getFlatsWithPostsListByUserId } from "~/api/estate";
import type { EstateWithPostsPreviewDto } from "~/dto/estates.dto";
import type { IEstateWithPosts, INoItemsSectionProps } from "~/types/ui.types";

const { pageData, isOwner } = storeToRefs(useUsersPageStore());

const getEstatesData = async () => {
  if (!pageData.value) return [];

  const flatsWithPosts = await getFlatsWithPostsListByUserId({
    userId: pageData.value.userId,
  });

  return flatsWithPosts;
};

const estates = ref<EstateWithPostsPreviewDto[]>([]);

estates.value = await getEstatesData();

const addEstateFormComponent = defineAsyncComponent(
  () => import("~/components/profile-page/forms/add-estate.vue"),
);

const { openDialog } = useDialogStore();

const showAddEstateDialog = () => {
  openDialog(addEstateFormComponent, true);
};

const noItemSectionProps = computed<INoItemsSectionProps>(() => {
  if (isOwner.value) {
    return {
      title: "Вы ещё не добавили жильё",
      subtitle: "Добавьте квартиру или дом, чтобы рассказать о нём и привлечь внимание",
      icon: 'smile'
    }
  }

  return {
    title: undefined,
    subtitle: 'Здесь ещё нет записей.',
    icon: 'sad'
  }
})
</script>

