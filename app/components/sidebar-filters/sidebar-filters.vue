<template>
  <PCard
    pt:content:class="flex flex-col gap-4"
    pt:root:class="p-5"
    pt:body:class="p-0"
  >
    <template #title> Что пишут про вашу квартиру </template>
    <template #subtitle>
      Найдите единомышленников с квартирой или домом как ваш.
    </template>
    <template #content>
      <PSelectButton v-model="estateTypeValue" :options="estateTypeOptions" />

      <div class="flex flex-col gap-3">
        <!-- roomness chips -->
        <div class="flex flex-wrap gap-1">
          <NuxtLink v-for="(label, index) in roomnessChips" :key="index" to="#">
            <PChip :label="label" />
          </NuxtLink>
        </div>

        <!-- building type chips -->
        <div class="flex flex-wrap gap-1">
          <NuxtLink
            v-for="(label, index) in buildingTypesChips"
            :key="index"
            to="#"
          >
            <PChip :label="label" />
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
    </template>
  </PCard>
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

<style scoped></style>

