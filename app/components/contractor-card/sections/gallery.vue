<template>
  <div class="flex flex-col gap-2 overflow-hidden rounded-sm -me-4 lg:-me-6">
    <Splide
      :options="{
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: '.5rem',
      }"
    >
      <SplideSlide v-for="i in 3" :key="i">
        <div class="h-30 w-27 rounded-sm overflow-hidden">
          <img
            :src="`https://picsum.photos/200/200?random=${i}`"
            class="object-cover w-full h-full"
          />
        </div>
      </SplideSlide>
    </Splide>
    <ContractorCardLinkWithArrow label="Все работы" />
  </div>
</template>

<script setup lang="ts">
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
</script>

