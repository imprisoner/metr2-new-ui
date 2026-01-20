<template>
  <div class="flex flex-col gap-10 pb-10">
    <ProfilePageTopSection @tab-click="onTabClick" />

    <Component :is="sections[visibleSection]" />

    <UiSubscribeSection
      v-bind="user"
      class="gap-4! lg:gap-6!"
      @subscribe="handleSubscribe"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProfilePageSectionKey } from '~/types/ui.types'

const handleSubscribe = () => {
  // TODO
}

const user = {
  avatarUrl: '/images/user-avatar.png',
  name: 'Julia Sh.'
}

const visibleSection = ref<ProfilePageSectionKey>('estate')

const onTabClick = (sectionKey: ProfilePageSectionKey) => {
  visibleSection.value = sectionKey
}

const sections: Record<ProfilePageSectionKey, Component> = {
  services: defineAsyncComponent(() => import('~/components/profile-page/sections/services.vue')),
  portfolio: defineAsyncComponent(() => import('~/components/profile-page/sections/portfolio.vue')),
  estate: defineAsyncComponent(() => import('~/components/profile-page/sections/estate.vue')),
  blog: defineAsyncComponent(() => import('~/components/profile-page/sections/blog.vue')),
  feedbacks: defineAsyncComponent(() => import('~/components/profile-page/sections/feedbacks.vue')),
}
</script>

