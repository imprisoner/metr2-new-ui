<template>
  <PForm
    v-slot="$form"
    :initialValues="initialValues"
    :resolver="resolver"
    @submit="onFormSubmit"
    class="flex flex-col gap-4 h-full lg:h-auto justify-center"
  >
    <p class="text-2xl font-semibold">Редактирование профиля</p>

    <div class="flex flex-col gap-2">
      <UiTextInput :input-props="{ name: 'name' }" label="Имя" />
    </div>

    <div class="w-full">
      <PSelectButton
        name="gender"
        :options="genderOptions"
        class="w-full grid grid-cols-2"
      />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">
        <UiTextInput :input-props="{ name: 'nickname' }" label="Никнейм"/>
      </div>

      <div class="flex flex-col gap-2">
        <UiNumberInput
          :input-props="{ name: 'age', inputId: 'age', useGrouping: false }"
          label="Возраст"
        />
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <UiInputWrapper label="О себе">
        <PTextarea
          size="small"
          name="about"
          rows="4"
          placeholder="Краткая информация о вас, вашем доме, увлечениях"
          class="w-full resize-none"
        />
      </UiInputWrapper>
    </div>

    <div class="flex flex-col gap-2">
      <UiInputWrapper label="Город">
        <PMultiSelect
          name="city"
          :options="cities"
          optionLabel="name"
          placeholder="Выберите один или несколько городов"
          display="chip"
          class="w-full flex items-center"
        />
      </UiInputWrapper>
    </div>

    <div class="flex flex-col-reverse lg:flex-row lg:justify-end gap-3">
      <PButton
        label="Отменить"
        outlined
        severity="secondary"
        class="flex-1 lg:flex-auto"
        @click="onCancel"
      />
      <PButton type="submit" class="flex-1 lg:flex-auto" label="Сохранить" />
    </div>
  </PForm>
</template>

<script setup lang="ts">
import resolver, { type ProfileInfoSchema } from "~/schemas/profile-info";

const onCancel = () => {};

const genderOptions = ref(["Мужчина", "Женщина"]);
const cities = ref([
  { name: "Москва", code: "MSK" },
  { name: "Санкт-Петербург", code: "SPB" },
  { name: "Казань", code: "KZN" },
]);

const initialValues = ref<ProfileInfoSchema>({
  name: "Алсу Новикова",
  gender: "Женщина",
  nickname: "user482845",
  age: null,
  about: "",
  city: null,
});

const onFormSubmit = ({ valid, values }: any) => {
  if (valid) {
    console.log("Form Submitted:", values);
  }
};
</script>

