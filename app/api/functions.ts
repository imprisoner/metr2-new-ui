import type { OAUTH_PROVIDERS } from "~/const";
import { pb } from "./client";

export const tryToRefreshToken = async () => {
  if (pb.authStore.isValid) {
    await pb.collection("users").authRefresh({ expand: "location" });
  }
};

export const authenticateWithProvider = async (
  provider: (typeof OAUTH_PROVIDERS)[number]
) => {
  await pb.collection("_pb_users_auth_").authWithOAuth2({
    provider,
    query: {
      expand: "location",
    },
  });
};
