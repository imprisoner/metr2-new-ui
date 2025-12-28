<template>
  <UiSheet class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <p class="text-2xl font-semibold">Что пишут про вашу квартиру</p>
      <p class="text-base text-custom-secondary">
        Найдите единомышленников с квартирой или домом как ваш.
      </p>
    </div>
    <PSelectButton
      v-model="estateTypeValue"
      :options="estateTypeOptions"
      class="custom-select-button"
      fluid
    />

    <div class="flex flex-col gap-3">
      <!-- roomness chips -->
      <div class="flex flex-wrap gap-1">
        <NuxtLink v-for="(label, index) in roomnessChips" :key="index" to="#">
          <PChip :label="label" :pt="{ root: { class: 'text-base' } }" />
        </NuxtLink>
      </div>

      <!-- building type chips -->
      <div class="flex flex-wrap gap-1">
        <NuxtLink
          v-for="(label, index) in buildingTypesChips"
          :key="index"
          to="#"
        >
          <PChip :label="label" :pt="{ root: { class: 'text-base' } }" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <PButton outlined severity="secondary" label="Ещё фильтры">
        <template #icon>
          <FiltersIcon />
        </template>
      </PButton>
      <PButton label="Найти" />
    </div>
  </UiSheet>
</template>

<script setup lang="ts">
import FiltersIcon from "~/components/icons/filters.vue";

const estateTypeValue = ref<string>("Квартира");
const estateTypeOptions = ["Квартира", "Частный дом"];

const roomnessChips = ["Студия", "1-комн", "2-комн", "3-комн", "4+"];

const buildingTypesChips = [
  "Новостройка",
  "90-е",
  "Брежневка",
  "Хрущёвка",
  "Сталинка",
  "Старый фонд",
];
</script>

<style>
.custom-select-button.p-selectbutton > button {
  font-size: 14px;
  flex: 1;
  padding: 10.5px 0;
}
</style>

