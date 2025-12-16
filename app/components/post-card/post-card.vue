<template>
  <div class="rounded-lg flex flex-col p-6 gap-6 bg-white">
    <!-- TOP -->
    <div class="flex flex-col gap-4">
      <PostCardUser />
      <h3 class="text-2xl font-semibold">Как мы решились на лофт</h3>
      <div class="flex gap-1">
        <UiSmallChip v-for="tag in mockTags" :key="tag" :label="tag" />
      </div>
    </div>
    <!-- BODY -->
    <PostCardImages />
    <p class="text-base">
      Сегодня мне хотелось бы предоставить твоему вниманию довольно интересный
      дизайн небольшой квартирки-студии в стиле лофт. Мне кажется, что стиль
      лофт как нельзя лучше подходит именно для квартир-студий (то есть для
      небольших квартирок). Благодаря своей самобытности этот стиль излишне не
      загромождает помещение ненужными предметами, да и в целом смотрится очень
      интересно. Сегодня мне хотелось бы предоставить твоему вниманию довольно
      интересный дизайн небольшой квартирки-студии в стиле лофт.
    </p>
    <!-- BOTTOM -->
    <PostCardComments />
  </div>
</template>

<script setup lang="ts">
import type smallChipVue from '../ui/small-chip/small-chip.vue';

const mockTags = ["Студия", "Ремонт", "Лофт", "Квартира"];
</script>

<style scoped></style>

