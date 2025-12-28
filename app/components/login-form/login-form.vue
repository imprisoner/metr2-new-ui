<template>
  <form class="flex flex-col gap-4 max-w-98 flex-1">
    <p class="text-2xl font-semibold mb-4">Войти</p>
    <div class="flex flex-col gap-2">
      <UiTextInput
        :icon="EnvelopeIcon"
        :input-props="{ placeholder: 'E-mail' }"
      />
      <UiTextInput :icon="KeyIcon" :input-props="{ placeholder: 'Пароль' }" />
    </div>
    <div class="flex flex-col gap-2">
      <PButton type="submit" label="Войти" severity="accent" />
      <PButton outlined severity="secondary" label="Создать аккаунт" />
      <PButton text label="Забыли пароль?" severity="secondary" />
    </div>
    <SocialAuthSection />
  </form>
</template>

<script setup lang="ts">
import EnvelopeIcon from "~/components/icons/envelope.vue";
import KeyIcon from "~/components/icons/key.vue";
</script>

