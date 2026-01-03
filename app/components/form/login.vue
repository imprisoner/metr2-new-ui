<template>
  <PForm
    v-slot="$form"
    :resolver
    :initial-values
    class="flex flex-col gap-4 max-w-98 flex-1 h-full justify-center"
    @submit="onSubmit"
  >
    <p class="text-2xl font-semibold">Войти</p>
    <div class="flex flex-col gap-2">
      <UiTextInput
        :icon="EnvelopeIcon"
        :input-props="{ placeholder: 'E-mail', name: 'email' }"
        :form-field-state="$form.email"
        :form="$form"
      />
      <UiTextInput
        :icon="KeyIcon"
        :input-props="{ placeholder: 'Пароль', name: 'password' }"
        :form-field-state="$form.password"
      />
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
  </PForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms";
import EnvelopeIcon from "~/components/icons/envelope.vue";
import KeyIcon from "~/components/icons/key.vue";
import resolver, { type LoginSchema } from "~/schemas/login";

const { showForm } = useLoginOrRegisterDialog();

const initialValues: LoginSchema = {
  email: "",
  password: "",
};

const onSubmit = (e: FormSubmitEvent) => {
  const event = e as FormSubmitEvent<LoginSchema>;

  const {
    valid,
    values
  } = event;

  // TODO
};
</script>

