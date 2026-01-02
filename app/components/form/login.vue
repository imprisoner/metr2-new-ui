<template>
  <UiDialogFormWrapper>
    <p class="text-2xl font-semibold">Войти</p>
    <div class="flex flex-col gap-2">
      <UiTextInput
        :icon="EnvelopeIcon"
        :input-props="{ placeholder: 'E-mail' }"
      />
      <UiTextInput :icon="KeyIcon" :input-props="{ placeholder: 'Пароль' }" />
    </div>
    <div class="flex flex-col gap-2">
      <PButton type="submit" label="Войти" severity="accent" />
      <PButton
        outlined
        severity="secondary"
        label="Создать аккаунт"
        @click="showForm('register')"
      />
      <PButton text label="Забыли пароль?" severity="secondary" />
    </div>
    <SocialAuthSection />
  </UiDialogFormWrapper>
</template>

<script setup lang="ts">
import EnvelopeIcon from "~/components/icons/envelope.vue";
import KeyIcon from "~/components/icons/key.vue";

const { showForm } = useLoginOrRegisterDialog();
</script>
