<template>
  <UiSheet class="overflow-hidden">
    <ContractorCardViewDesktop v-if="isDesktop" :name :rating :feedbacks-count :status :city>
      <ContractorCardBody :services :feedbacks :feedbacks-count />
    </ContractorCardViewDesktop>
    <ContractorCardViewMobile v-else :name :rating :feedbacks-count :status :city>
      <ContractorCardBody :services :feedbacks :feedbacks-count />
    </ContractorCardViewMobile>
  </UiSheet>
</template>

<script setup lang="ts">
import type { IFeedbackPreview, IServiceItemProps } from "~/types/ui.types";

const {isDesktop} = useDevice()

const services: IServiceItemProps[] = [
  {
    id: "1",
    name: "Возведение стен и перегородок",
    priceMin: 5000,
    priceMax: 10000,
  },
  {
    id: "2",
    name: "Демонтаж стен и перегородок",
    priceMin: 5000,
    priceMax: 5000,
  },
  {
    id: "3",
    name: "Строительство коттеджей",
    priceMin: 0,
    priceMax: 0,
  },
];

const feedbacksCount = 83;
const rating = 4.9;
const name = "Сергей Бикир";
const city = "Москва";
const status = "Онлайн";

const feedbacks: IFeedbackPreview[] = [
  {
    user: { name: "Ринат", avatarUrl: "" },
    date: "2026-01-11T00:00:00.000Z",
    rating: 5,
    text: "Все вовремя, отличная работа. Знает свое дело.",
  },
  {
    user: { name: "Оксана", avatarUrl: "" },
    date: "2025-09-30T00:00:00.000Z",
    rating: 5,
    text: "Постройка хозяйственного блока выполнена качественно...",
  },
] as const;
</script>

