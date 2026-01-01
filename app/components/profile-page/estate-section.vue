<template>
  <UiSheet title="Квартиры, дома" :count="2" class="flex flex-col gap-6">
    <ProfilePageEstateItem v-for="item in realEstates" v-bind="item"/>
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