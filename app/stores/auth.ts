import { pb } from "~/api/client";
import type { DictCitiesRecord, UsersResponse } from "~/types/pocketbase-types";

export const useAuthStore = defineStore("auth", () => {
  const isOwner = ref(true);

  const isAuthorized = ref(false);

  const userInfo = ref<UsersResponse<{ location: DictCitiesRecord }>>(
    {} as UsersResponse<{ location: DictCitiesRecord }>,
  );

  const logout = () => {
    pb.authStore.clear();
  };

  return {
    isOwner,
    isAuthorized,
    userInfo,
    logout,
  };
});
