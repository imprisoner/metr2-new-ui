<template>
  <div class="flex flex-col gap-10">
    <UiSheet class="flex flex-col gap-4">
      <div>
        <p class="text-base font-semibold text-custom-secondary mb-3">
          Алсу Новикова
        </p>
        <h1 class="text-5xl font-semibold">Дневники</h1>
      </div>
      <FlatSelect
        v-if="flats.length"
        :options="flats"
        :default-value="flats[0]"
        v-model="currentFlat"
      />
    </UiSheet>

    <!--  -->
    <UiSheet>
      <div class="flex gap-2 items-center">
        <div class="flex-1">
          <p class="text-xl font-semibold">Не пора ли добавить новую запись?</p>
          <p class="text-base text-custom-secondary">Ваши подписчики ждут</p>
        </div>
        <UiButtonAdd @click="handleAddRecord"/>
        <PButton outlined severity="secondary" label="Черновики" @click="goToDrafts" />
      </div>
    </UiSheet>
    <!--  -->

    <UiNoItemsSection v-bind="recordSectionValues[flats.length ? 1 : 0]" @button-click="handleAddRecord"/>
  </div>
</template>

<script setup lang="ts">
import type { ExtractPublicPropTypes } from "vue";
import UiNoItemsSection from "~/components/ui/no-items-section/no-items-section.vue";
import { MOCK_IMAGES } from "~/const/mock";
import type { FlatOption } from "~/types/ui.types";

const currentFlat = ref();

const flats: FlatOption[] = [
  {
    imageUrl: MOCK_IMAGES[0],
    type: "Квартира",
    name: "Мой уютный уголочек",
  },
];

const recordSectionValues: ExtractPublicPropTypes<typeof UiNoItemsSection> = [
  {
    icon: "sad",
    title: "Здесь пока ничего нет",
    subtitle: "Для начала добавьте квартиру или дом",
  },
  {
    icon: "smile",
    title: "Пора добавить первую запись",
    subtitle: "Ваш дневник пока пуст",
  },
];

const handleAddRecord = () => {}

const goToDrafts = () => {}
</script>

<style scoped></style>

