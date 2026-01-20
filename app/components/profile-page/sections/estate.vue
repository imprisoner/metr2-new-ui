<template>
  <ProfilePageSectionWrapper title="Квартиры, дома" :count="2">
    <div v-if="estates.length > 0" class="flex flex-col gap-4 lg:gap-6">
      <template v-for="(item, index) in estates">
        <ProfilePageEstateItem v-bind="item" />
        <UiDivider v-if="index !== estates.length - 1" class="my-3" />
      </template>
    </div>
    <UiNoItemsSection
      v-else
      class="gap-4! lg:gap-6!"
      :ui-sheet-props="{ title: 'Квартиры, дома' }"
      icon="sad"
      title="Вы ещё не добавили жильё"
      subtitle="Добавьте квартиру или дом, чтобы рассказать о нём и привлечь внимание"
      @button-click="showAddEstateDialog"
    />
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
const estates = [
  {
    name: "Мой уютный уголочек",
    tags: ["Студия", "Ремонт", "Лофт", "Квартира", "45-60 м2"],
  },
  {
    name: "Я купил себе дом у ручья",
    tags: ["Дом", "Коттедж", "Скандинавский", "90-120 м2"],
  },
];

const addEstateFormComponent = defineAsyncComponent(() => import('~/components/profile-page/forms/add-estate.vue'))

const { openDialog } = useDialogStore()

const showAddEstateDialog = () => {
  openDialog(addEstateFormComponent, true)
}
</script>
