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
        :flats="flats"
        :default-value="flats[0]"
        v-model="currentFlat"
      />
    </UiSheet>

    <!--  -->
    <UiSheet class="flex flex-col lg:flex-row gap-2 lg:items-center">
      <div class="flex-1">
        <p class="text-xl font-semibold">Не пора ли добавить новую запись?</p>
        <p class="text-base text-custom-secondary">Ваши подписчики ждут</p>
      </div>
      <div class="flex gap-2 w-full lg:w-fit">
        <UiButtonAdd
          label="Написать"
          @click="handleAddRecord"
          class="flex-1 justify-center!"
        />
        <PButton
          outlined
          severity="secondary"
          label="Черновики"
          @click="goToDrafts"
          class="flex-1"
        />
      </div>
    </UiSheet>
    <!--  -->

    <UiNoItemsSection
      v-bind="noItemSectionProps"
      @button-click="handleAddRecord"
    />
  </div>
</template>

<script setup lang="ts">
import { MOCK_IMAGES } from "~/const/mock";
import type { FlatOption, INoItemsSectionProps } from "~/types/ui.types";

const currentFlat = ref();

const flats: FlatOption[] = [
  {
    imageUrl: MOCK_IMAGES[0],
    type: "Квартира",
    name: "Мой уютный уголочек",
  },
];

const noItemSectionValues: INoItemsSectionProps[] = [
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

const noItemSectionProps = computed(() => {
  return noItemSectionValues[flats.length ? 1 : 0] as INoItemsSectionProps;
});

const handleAddRecord = () => {};

const goToDrafts = () => {};
</script>

