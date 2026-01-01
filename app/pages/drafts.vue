<template>
  <div class="flex flex-col gap-10">
    <UiSheet class="flex flex-col gap-4">
      <div>
        <p class="text-base font-semibold text-custom-secondary mb-3">
          Алсу Новикова
        </p>
        <h1 class="text-5xl font-semibold">Черновики</h1>
      </div>
    </UiSheet>

    <UiNoItemsSection v-bind="noItemsSection" @button-click="handleAddRecord" />

    <UiSheet>
      <template v-for="(draft, index) in drafts">
        <DraftCard v-bind="draft" />
        <UiDivider v-if="index !== drafts.length - 1" class="my-4.5" />
      </template>
    </UiSheet>
  </div>
</template>

<script setup lang="ts">
import DraftCard from "~/components/draft-card/draft-card.vue";
import { MOCK_DRAFTS } from "~/const/mock";
import type { INoItemsSectionProps } from "~/types/ui.types";

const noItemsSection: INoItemsSectionProps = {
  title: "Здесь пока ничего нет",
  subtitle:
    "Здесь будут храниться ваши черновики из Дневников, Блога или Портфолио",
  icon: "sad",
};

const handleAddRecord = () => {};

const drafts = MOCK_DRAFTS;
</script>

<style scoped></style>
