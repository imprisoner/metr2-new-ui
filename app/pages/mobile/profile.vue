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
  </div>
</template>

<script setup lang="ts">
import NoItemsSection from "~/components/ui/no-items-section/no-items-section.vue";
import SubscribeSection from "~/components/ui/subscribe-section/subscribe-section.vue";

definePageMeta({
  layout: 'mobile'
})

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
</script>

<style scoped>
/* .bg-tagir {
    background: center / cover no-repeat url('/images/profile-top-bg.webp');
  } */
</style>

