<template>
  <form class="flex flex-col gap-4 max-w-98 flex-1">
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
      <UiTextWithLines>Уже есть аккаунт?</UiTextWithLines>
      <PButton outlined severity="secondary" label="Войти" />
    </div>
  </form>
</template>

<script setup lang="ts">
const isDisabled = true;
</script>

<style scoped></style>

