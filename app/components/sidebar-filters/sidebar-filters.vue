<template>
  <UiSheet class="flex flex-col gap-4 p-5">
    <UiAccordion>
      <template #expandicon>
        <ChevronDownIcon class="self-start w-6 h-6"/>
      </template>
      <template #collapseicon>
        <ChevronUpIcon class="self-start w-6 h-6"/>
      </template>

      <template #header>
        <div class="flex flex-col gap-2">
          <p class="text-2xl font-semibold">Что пишут про вашу квартиру</p>
          <p class="text-base text-custom-secondary">
            Найдите единомышленников с квартирой или домом как ваш.
          </p>
        </div>
      </template>
      <div class="flex flex-col gap-4">
        <EstateTypeSelect v-model="estateTypeValue" />

        <div class="flex flex-col gap-3">
          <!-- roomness chips -->
          <div class="flex flex-wrap gap-1">
            <NuxtLink
              v-for="(label, index) in roomnessChips"
              :key="index"
              to="#"
            >
              <UiChip :label="label" />
            </NuxtLink>
          </div>

          <!-- building type chips -->
          <div class="flex flex-wrap gap-1">
            <NuxtLink
              v-for="(label, index) in buildingTypesChips"
              :key="index"
              to="#"
            >
              <UiChip :label="label" />
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
      </div>
    </UiAccordion>
  </UiSheet>
  <!-- <UiSheet class="flex flex-col gap-4 p-5">
    <div class="flex flex-col gap-2">
      <p class="text-2xl font-semibold">Что пишут про вашу квартиру</p>
      <p class="text-base text-custom-secondary">
        Найдите единомышленников с квартирой или домом как ваш.
      </p>
    </div>
    <EstateTypeSelect v-model="estateTypeValue" />

    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap gap-1">
        <NuxtLink v-for="(label, index) in roomnessChips" :key="index" to="#">
          <UiChip :label="label" />
        </NuxtLink>
      </div>

      <div class="flex flex-wrap gap-1">
        <NuxtLink
          v-for="(label, index) in buildingTypesChips"
          :key="index"
          to="#"
        >
          <UiChip :label="label" />
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
  </UiSheet> -->
</template>

<script setup lang="ts">
const estateTypeValue = ref<string>("Квартира");

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

