<template>
  <PForm
    v-slot="$form"
    :initialValues="initialValues"
    :resolver="resolver"
    @submit="onFormSubmit"
    class="flex flex-col gap-5"
  >
    <div class="flex flex-col gap-2">
      <label for="name">Имя</label>
      <UiTextInput :input-props="{ name: 'name' }" />
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
        <label for="nickname">Никнейм</label>
        <UiTextInput :input-props="{ name: 'nickname' }" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="age">Возраст</label>
        <UiNumberInput
          :input-props="{ name: 'age', inputId: 'age', useGrouping: false }"
        />
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <label for="about">О себе</label>
      <PTextarea
        name="about"
        rows="4"
        placeholder="Краткая информация о вас, вашем доме, увлечениях"
        class="w-full resize-none"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="city">Город</label>
      <PMultiSelect
        name="city"
        :options="cities"
        optionLabel="name"
        placeholder="Выберите один или несколько городов"
        display="chip"
        class="w-full flex items-center"
      />
    </div>

    <div class="flex justify-end gap-3 mt-4">
      <PButton
        label="Отменить"
        outlined
        severity="secondary"
        @click="onCancel"
      />
      <PButton type="submit" label="Сохранить" />
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

