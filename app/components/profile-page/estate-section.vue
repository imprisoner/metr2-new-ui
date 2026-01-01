<template>
  <UiSheet title="Квартиры, дома" :count="2" class="flex flex-col gap-4 lg:gap-6">
    <div class="flex flex-col lg:gap-9">
      <template v-for="(item, index) in realEstates">
        <ProfilePageEstateItem v-bind="item"/>
        <UiDivider v-if="index !== realEstates.length - 1"/>
      </template>
    </div>
  </UiSheet>
</template>

<script setup lang="ts">

  const realEstates = [
    {
      name: "Мой уютный уголочек",
      tags: ['Студия', 'Ремонт', 'Лофт', 'Квартира', '45-60 м2'],
    },
    {
      name: "Я купил себе дом у ручья",
      tags: ['Дом', 'Коттедж', 'Скандинавский', '90-120 м2'],
    },
  ] 
</script>

<style scoped>

</style>