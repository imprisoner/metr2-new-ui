<template>
  <Splide>
    <SplideSlide v-for="(item, index) in recommended" :key="index">
      <RecommendedCard v-bind="item" />
    </SplideSlide>
  </Splide>
  <!-- <div class="px-2 gap-4 flex max-w-60">
        <RecommendedCard v-bind="slotProps.data" />
        <UiDivider direction="vertical"/>
      </div> -->
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

const isLast = (index: number) => {
  return index === recommended.length - 1;
};
</script>

<style scoped></style>

