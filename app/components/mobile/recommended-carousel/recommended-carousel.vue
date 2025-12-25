<template>
  <Splide
    :options="{
      type: 'loop',
      arrows: false,
      pagination: false,
      autoWidth: true,
      gap: '1.25rem',
    }"
  >
    <SplideSlide v-for="(item, index) in recommended" :key="index">
      <div class="gap-5 flex">
        <RecommendedCard v-bind="item" />
        <UiDivider direction="vertical" />
      </div>
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import { RECOMMENDED_POSTS } from "~/components/const/mock";
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const recommended = RECOMMENDED_POSTS;

const responsiveOptions = [
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 2,
  },
];
</script>

