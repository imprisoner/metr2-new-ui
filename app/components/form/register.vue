<template>
  <UiDialogFormWrapper>
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
      <UiTextWithLines severity="secondary"
        >Уже есть аккаунт?</UiTextWithLines
      >
      <PButton
        outlined
        severity="secondary"
        label="Войти"
        @click="showForm('login')"
      />
    </div>
  </UiDialogFormWrapper>
</template>

<script setup lang="ts">
const isDisabled = true;

const { showForm } = useLoginOrRegisterDialog();
</script>
