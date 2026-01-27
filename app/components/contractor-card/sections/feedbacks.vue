<template>
  <div class="flex flex-col gap-2 -me-4 lg:-me-6">
    <Splide
      :options="{
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: '.5rem',
      }"
    >
      <SplideSlide v-for="(item, index) in feedbacks" :key="index">
        <ContractorCardFeedbackItem v-bind="item" />
      </SplideSlide>
    </Splide>
    <ContractorCardLinkWithArrow label="Все отзывы" :count="total" />
  </div>
</template>

<script setup lang="ts">
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import type { IFeedbackPreview } from "~/types/ui.types";

defineProps<{
  feedbacks: IFeedbackPreview[];
  total: number;
}>();
</script>

