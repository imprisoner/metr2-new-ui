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
    <SplideSlide v-for="(item, index) in items" :key="index">
      <div class="gap-5 flex">
        <PostPreviewCard v-bind="item" />
        <UiDivider direction="vertical" />
      </div>
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import type { IPostPreviewEntity } from "~/types/ui.types";

defineProps<{items: IPostPreviewEntity[]}>()
</script>

