<template>
  <PForm class="flex flex-col gap-6 w-full h-full">
    <p class="text-2xl font-semibold">Добавление квартиры или дома</p>
    <div class="flex gap-10 flex-1">
      <div class="flex flex-1 flex-col gap-4">
        <EstateTypeSelect v-model="estateTypeValue" />
        <div class="flex gap-4">
          <UiTextInput
            label="Название"
            :input-props="{
              name: 'nickname',
              placeholder: 'Например, Моя крепость',
            }"
            class="flex-1"
          />
          <UiNumberInput
            label="Площадь, м2"
            :input-props="{ name: 'squareM2', placeholder: 'Например, 63' }"
            class="max-w-32"
          />
        </div>
        <div class="flex flex-col gap-2">
          <UiInputWrapper>
            <PTextarea
              size="small"
              name="description"
              rows="4"
              placeholder="Описание"
              class="w-full resize-none"
            />
          </UiInputWrapper>
        </div>
        <!--  -->
        <UiChipSelectInput :options="series" label="Серия дома"/>
        <UiChipSelectInput :options="roomness" label="Тип квартиры"/>
        <UiChipSelectInput :options="finishing" label="Отделка"/>
      </div>
      <!--  -->
      <div class="flex-1 flex">
        <UiFileUpload class="w-full"/>
      </div>
    </div>
  </PForm>
</template>

<script setup lang="ts">
const estateTypeValue = ref<string>();

const series = [
  "Новостройка",
  "90-е",
  "Брежневка",
  "Хрущёвка",
  "Сталинка",
  "Старый фонд",
  "Без серии",
];

const roomness = ["Студия", "1-комн", "2-комн", "3-комн", "4+"];

const finishing = [
  "White Box",
  "Косметика",
  "От застройщика",
  "Дизайнерская",
  "В процессе ремонта",
  "Без отделки",
];
</script>

