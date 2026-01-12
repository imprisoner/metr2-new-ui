<template>
  <ProfilePageSectionWrapper title="Квартиры, дома" :count="2">
    <div class="flex flex-col gap-4 lg:gap-6">
      <template v-for="(item, index) in realEstates">
        <ProfilePageEstateItem v-bind="item" />
        <UiDivider v-if="index !== realEstates.length - 1" class="my-3" />
      </template>
    </div>
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
const realEstates = [
  {
    name: "Мой уютный уголочек",
    tags: ["Студия", "Ремонт", "Лофт", "Квартира", "45-60 м2"],
  },
  {
    name: "Я купил себе дом у ручья",
    tags: ["Дом", "Коттедж", "Скандинавский", "90-120 м2"],
  },
];
</script>

<style scoped></style>

