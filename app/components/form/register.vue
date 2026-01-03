<template>
  <PForm
    v-slot="$form"
    :resolver
    :initial-values
    class="flex flex-col gap-4 max-w-98 flex-1 h-full justify-center"
    @submit="onSubmit"
  >
    <p class="text-2xl font-semibold">Создать аккаунт</p>
    <UiTextInput label="E-mail" :input-props="{ placeholder: 'Почта' }" />
    <UiTextInput label="Пароль" :input-props="{ placeholder: 'Пароль' }" />
    <UiTextInput
      label="Повторите пароль"
      :input-props="{ placeholder: 'Пароль' }"
    />
    <UiTextInput label="Имя" :input-props="{ placeholder: 'ФИО' }" />
    <UiCheckboxInput
      label="Я подрядчик (предоставляю услуги)"
      :input-props="{}"
    />
    <UiCheckboxInput :input-props="{}">
      <template #label>
        <span class="text-base"
          >Даю согласие на <NuxtLink to="#">обработку данных</NuxtLink></span
        >
      </template>
    </UiCheckboxInput>
    <div class="flex flex-col gap-2">
      <PButton label="Зарегистрироваться" :disabled="isDisabled" />
      <SocialAuthSection />
      <UiTextWithLines severity="secondary">Уже есть аккаунт?</UiTextWithLines>
      <PButton
        outlined
        severity="secondary"
        label="Войти"
        @click="showForm('login')"
      />
    </div>
  </PForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms";
import resolver, { type RegisterSchema } from "~/schemas/register";
const { showForm } = useLoginOrRegisterDialog();

const isDisabled = true;

const initialValues: RegisterSchema = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  role: "",
};

const onSubmit = (e: FormSubmitEvent) => {
  const event = e as FormSubmitEvent<RegisterSchema>;

  const { valid, values } = event;

  // TODO
};
</script>

