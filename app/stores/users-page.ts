import { getUserProfileByUsername } from "~/api/users";
import type { ContractorsServicesRecord, FlatsRecord } from "~/types/pocketbase-types";
import type { ProfilePageSectionKey } from "~/types/ui.types";

export const useUsersPageStore = defineStore("users-page", () => {
  const route = useRoute("users-username");
  const authStore = useAuthStore();

  const isOwner = computed(
    () => route.params.username === authStore.userInfo.username,
  );

  // page data and sections getters

  const pageData = ref<Awaited<ReturnType<typeof getUserProfileByUsername>>>();

  const getUserProfileData = async (username: string) => {
    pageData.value = await getUserProfileByUsername(username);
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

