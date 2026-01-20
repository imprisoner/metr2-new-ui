import { getUserProfileByUsername } from "~/api/users";
import type { ProfilePageSectionKey } from "~/types/ui.types";

export const useUsersPageStore = defineStore("users-page", () => {
  const route = useRoute("users-username");
  const authStore = useAuthStore();

  const isOwner = computed(
    () => route.params.username === authStore.userInfo.username,
  );

  const pageData = ref<Awaited<ReturnType<typeof getUserProfileByUsername>>>();

  const getUserProfileData = async () => {
    pageData.value = await getUserProfileByUsername(route.params.username);
  };

  // tabs
  const visibleSection = ref<ProfilePageSectionKey>("estate");

  return {
    isOwner,
    visibleSection,
    pageData,
    getUserProfileData,
  };
});

