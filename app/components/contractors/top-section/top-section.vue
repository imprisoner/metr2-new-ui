<template>
  <UiSheet class="p-6 flex flex-col gap-4 lg:gap-6">
    <div class="flex flex-col gap-3">
      <h1 class="text-5xl">Подрядчики</h1>
      <p class="text-base text-custom-secondary">{{ count }} специалиста</p>
    </div>
    <div class="flex gap-2 flex-col">
      <slot />

      <UiDivider class="my-3" />

      <div class="flex flex-col lg:flex-row gap-4 lg:justify-between lg:items-center">
        <UiSmallSelect :options="cities" :default-value="cities[0]">
          <template #icon>
            <MarkerIcon />
          </template>
        </UiSmallSelect>
        
        <div class="flex gap-4 justify-between">
          <UiSmallSelect :options="sortOptions" :default-value="sortOptions[0]">
            <template #icon>
              <VerticalArrowsIcon />
            </template>
          </UiSmallSelect>

          <UiButtonTextSmall label="Все фильтры">
            <template #icon>
              <FiltersIcon class="w-3.5 h-3.5"/>
            </template>
          </UiButtonTextSmall>
        </div>
      </div>
    </div>
  </UiSheet>
</template>

<script setup lang="ts">
const count = "48 093";

const cities = ["Москва", "Санкт-Петербург"];
const sortOptions = ['Топ недели', 'Лучшие']
</script>

<style scoped></style>
