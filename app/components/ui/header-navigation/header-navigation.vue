<template>
  <nav
    class="flex"
    :class="{
      'flex-col': isMobile,
      'gap-3': isMobile,
      'items-center': !isMobile,
      'flex-1': !isMobile,
      'justify-between': !isMobile,
    }"
  >
    <ul
      :class="{
        'gap-6 flex': !isMobile,
      }"
    >
      <li v-for="item in leftSection" :key="item.label">
        <NuxtLink
          :to="item.to"
          :class="{
            'p-3 text-primary font-medium': isMobile,
            'font-semibold': !isMobile,
          }"
          class="flex gap-2"
        >
          <Component
            :is="item.icon"
            :class="{ 'text-custom-icon': isMobile }"
          />
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <hr v-if="isMobile" class="w-full text-custom-divider" />

    <ul
      :class="{
        'gap-6 flex': !isMobile,
      }"
    >
      <li v-for="item in rightSection" :key="item.label">
        <NuxtLink
          :to="item.to"
          :class="{
            'p-3 text-primary': isMobile,
          }"
          class="font-medium flex gap-2"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <hr v-if="isMobile" class="w-full text-custom-divider" />

    <p v-if="isMobile" class="text-xs text-custom-secondary">
      ©2026 TAGIR.RU | О проекте | Правила конфиденциальности | Правила
      пользования | Использование cookies
    </p>
  </nav>
</template>

<script setup lang="ts">
import BuildingIcon from "~/components/icons/building.vue";
import HouseIcon from "~/components/icons/house.vue";
import CrownIcon from "~/components/icons/crown.vue";

const { isMobile } = defineProps<{
  isMobile?: boolean;
}>();

const leftSection = [
  {
    label: "Квартиры",
    icon: BuildingIcon,
    to: "#",
  },
  {
    label: "Частные дома",
    icon: HouseIcon,
    to: "#",
  },
  {
    label: "Квартира дня",
    icon: CrownIcon,
    to: "#",
  },
] as const;

const rightSection = [
  {
    label: "Сообщества",
    to: "#",
  },
  {
    label: "Подрядчики",
    to: "#",
  },
  {
    label: "Барахолка",
    to: "#",
  },
] as const;

const itemRootClasses = isMobile ? ["p-3", "text-primary"] : [];
const itemIconClasses = isMobile ? ["text-custom-icon"] : [];
</script>

<style scoped></style>

