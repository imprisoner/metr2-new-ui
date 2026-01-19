<template>
  <UiTextWithLines severity="secondary">или продолжить с</UiTextWithLines>
  <div class="flex gap-2 justify-center">
    <PButton
      v-for="({ icon, provider }) in socialButtons"
      :key="provider"
      outlined
      rounded
      severity="secondary"
      @click="handleProviderAuth(provider)"
    >
      <template #icon>
        <Component :is="icon" />
      </template>
    </PButton>
  </div>
</template>

<script setup lang="ts">
import { authenticateWithProvider } from "~/api/functions";
import type { OAUTH_PROVIDERS } from "~/const";
import GoogleIcon from "~~/layers/ui/app/icons/google-icon.vue";
import VkontakteIcon from "~~/layers/ui/app/icons/vkontakte-icon.vue";
import YandexIcon from "~~/layers/ui/app/icons/yandex-icon.vue";

type Provider = (typeof OAUTH_PROVIDERS)[number];

const socialButtons: {
  icon: Component;
  provider: Provider;
}[] = [
  {
    icon: GoogleIcon,
    provider: "google",
  },
  {
    icon: YandexIcon,
    provider: "yandex",
  },
  {
    icon: VkontakteIcon,
    provider: "vk",
  },
];

const { closeDialog } = useDialogStore()

const handleProviderAuth = async (provider: Provider) => {
  closeDialog(true)

  try {
    await authenticateWithProvider(provider)
  } catch {
    // TODO error handling
    alert("Ошибка авторизации через социальную сеть")
  }
}
</script>

