<template>
  <div class="flex flex-col gap-10 pb-10">
    <ProfilePageTopSection
      :about="pageData.about"
      :avatar="pageData.avatar"
      :post-count="pageData.postCount as number"
      :role="pageData.role"
      :name="pageData.name"
    />

    <KeepAlive>
      <Component :is="sections[store.visibleSection]" />
    </KeepAlive>

    <UiSubscribeSection
      :avatar-url="pageData.avatar"
      :name="pageData.name"
      class="gap-4! lg:gap-6!"
      @subscribe="handleSubscribe"
    />
  </div>
</template>

<script setup lang="ts">
import { UsersProfileViewRoleOptions } from "~/types/pocketbase-types";
import type { ProfilePageSectionKey } from "~/types/ui.types";

const handleSubscribe = () => {
  // TODO
};

const sections: Record<ProfilePageSectionKey, Component> = {
  services: defineAsyncComponent(
    () => import("~/components/profile-page/sections/services.vue"),
  ),
  portfolio: defineAsyncComponent(
    () => import("~/components/profile-page/sections/portfolio.vue"),
  ),
  estate: defineAsyncComponent(
    () => import("~/components/profile-page/sections/estate.vue"),
  ),
  blog: defineAsyncComponent(
    () => import("~/components/profile-page/sections/blog.vue"),
  ),
  feedbacks: defineAsyncComponent(
    () => import("~/components/profile-page/sections/feedbacks.vue"),
  ),
};

const store = useUsersPageStore();
const route = useRoute("users-username");

await store.getUserProfileData(route.params.username);

const pageData = store.pageData!;

const defaultSection =
  pageData.role === UsersProfileViewRoleOptions.contractor
    ? "services"
    : "estate";

store.visibleSection = defaultSection;
</script>

