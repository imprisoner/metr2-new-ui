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

    <AboutLinksSection v-if="isMobile" />
  </nav>
</template>

<script setup lang="ts">
import BuildingIcon from "#layers/ui/app/icons/building-icon.vue";
import HouseIcon from "#layers/ui/app/icons/house-icon.vue";
import CrownIcon from "#layers/ui/app/icons/crown-icon.vue";

const { isMobile } = defineProps<{
  isMobile?: boolean;
}>();

const leftSection = [
  {
    label: "Квартиры",
    icon: BuildingIcon,
    to: "/flats",
  },
  {
    label: "Частные дома",
    icon: HouseIcon,
    to: "/houses",
  },
  {
    label: "Квартира дня",
    icon: CrownIcon,
    to: "/popular",
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
</script>

