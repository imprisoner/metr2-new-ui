<template>
  <div class="flex flex-col gap-10 pb-10">
    <ProfilePageTopSection
      :about="pageData.about"
      :avatar="pageData.avatar"
      :post-count="pageData.postCount as number"
      :role="pageData.role"
      :name="pageData.name"
    />

    <Component :is="sections[store.visibleSection]" />

    <UiSubscribeSection
      v-bind="user"
      class="gap-4! lg:gap-6!"
      @subscribe="handleSubscribe"
    />
  </div>
</template>

<script setup lang="ts">
import { getUserProfileByUsername } from "~/api/users";
import { UsersProfileViewRoleOptions } from "~/types/pocketbase-types";
import type { ProfilePageSectionKey } from "~/types/ui.types";

const user = {
  avatarUrl: "/images/user-avatar.png",
  name: "Julia Sh.",
};

const route = useRoute("users-username");

const username = route.params.username;

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

await store.getUserProfileData();

const pageData = store.pageData!;

const defaultSection =
  pageData.role === UsersProfileViewRoleOptions.contractor
    ? "services"
    : "estate";

store.visibleSection = defaultSection;
</script>

