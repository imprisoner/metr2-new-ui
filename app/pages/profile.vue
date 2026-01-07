<template>
  <div class="flex flex-col gap-10 pb-10">
    <ProfilePageTopSection />

    <ProfilePageServicesSection />

    <ProfilePagePortfolioSection />

    <NoItemsSection
      class="gap-4! lg:gap-6!"
      :ui-sheet-props="{ title: 'Отзывы' }"
      icon="sad"
      subtitle="Отзывов пока нет. Будьте первым!"
    >
      <template #button>
        <PButton outlined severity="secondary" label="Оставить отзыв" @click="addFeedback"/>
      </template>
    </NoItemsSection>

    <SubscribeSection v-bind="user" class="gap-4! lg:gap-6!" @subscribe="handleSubscribe" />
    
    <ProfilePageEstateSection />
    
    <ProfilePageBlogSection />
    
    <SubscribeSection v-bind="user" class="gap-4! lg:gap-6!" @subscribe="handleSubscribe" />

    <NoItemsSection
      class="gap-4! lg:gap-6!"
      :ui-sheet-props="{ title: 'Квартиры, дома' }"
      icon="sad"
      title="Вы ещё не добавили жильё"
      subtitle="Добавьте квартиру или дом, чтобы рассказать о нём и привлечь внимание"
      @button-click="showAddEstateDialog"
    />
  </div>
</template>

<script setup lang="ts">
import NoItemsSection from "~/components/ui/no-items-section/no-items-section.vue";
import SubscribeSection from "~/components/ui/subscribe-section/subscribe-section.vue";

const addFeedback = () => {
  // TODO
}

const handleSubscribe = () => {
  // TODO
}

const user = {
  avatarUrl: '/images/user-avatar.png',
  name: 'Julia Sh.'
}

const { openDialog } = useDialogStore()

const addEstateFormComponent = defineAsyncComponent(() => import('~/components/profile-page/forms/add-estate.vue'))

const showAddEstateDialog = () => {
  openDialog(addEstateFormComponent, true)
}
</script>

<style scoped>
/* .bg-tagir {
    background: center / cover no-repeat url('/images/profile-top-bg.webp');
  } */
</style>

