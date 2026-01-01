<template>
  <div class="rounded-lg flex flex-col p-4 lg:p-6 gap-6 bg-white">
    <!-- TOP -->
    <div class="flex flex-col gap-4">
      <UserSection :mobile="mobile" />
      <h3 class="text-4xl font-semibold">Как мы решились на лофт</h3>
      <div class="flex gap-1">
        <UiSmallChip v-for="tag in mockTags" :key="tag" :label="tag" />
      </div>
    </div>
    <!-- BODY -->
    <UiImagesGrid class="h-75" />
    <div class="flex flex-col gap-2 text-xl">
      <p>
        Сегодня мне хотелось бы предоставить твоему вниманию довольно интересный
        дизайн небольшой квартирки-студии в стиле лофт. Мне кажется, что стиль
        лофт как нельзя лучше подходит именно для квартир-студий (то есть для
        небольших квартирок). Благодаря своей самобытности этот стиль излишне не
        загромождает помещение ненужными предметами, да и в целом смотрится
        очень интересно. Сегодня мне хотелось бы предоставить твоему вниманию
        довольно интересный дизайн небольшой квартирки-студии в стиле лофт.
      </p>
      <NuxtLink to="#" class="font-semibold">Читать далее</NuxtLink>
    </div>
    <!-- BOTTOM -->
    <PostCardCommentsArea />
  </div>
</template>

<script setup lang="ts">
import UserSection from "../user-section/user-section.vue";

defineProps<{ mobile?: boolean }>();

const mockTags = ["Студия", "Ремонт", "Лофт", "Квартира"];
</script>

<style scoped></style>

