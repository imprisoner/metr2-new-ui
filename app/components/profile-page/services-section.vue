<template>
  <ProfilePageSectionWrapper
    title="Услуги"
    :count="3"
    class="flex flex-col gap-4 lg:gap-6"
  >
    <ProfilePageServicesList :items="services" />
    <!--  -->
    <PButton v-if="!isOwner" outlined severity="secondary" label="Оставить отзыв" class="w-fit"/>
  </ProfilePageSectionWrapper>
</template>

<script setup lang="ts">
import type { IServiceItemProps } from "~/types/ui.types";

const services: IServiceItemProps[] = [
  {
    id: "1",
    name: "Строительство бань и саун",
    description: "Строим бани и сауны, недорого, качественно, в любых объёмах",
    priceMin: 500000,
    priceMax: 1000000,
  },
  {
    id: "2",
    name: "Демонтаж стен и перегородок",
    description:
      "Демонтируем стены и перегородки, недорого, качественно, в любых объёмах",
    priceMin: 500000,
    priceMax: 0,
  },
  {
    id: "3",
    name: "Строительство коттеджей",
    description:
      "Строим коттеджи, недорого, качественно, в любых объёмах. Строим коттеджи, недорого, качественно, в любых объёмах. Строим коттеджи, недорого, качественно, в любых объёмах. ",
    priceMin: 0,
    priceMax: 0,
  },
];

const { isOwner } = storeToRefs(useAuthStore());
</script>

