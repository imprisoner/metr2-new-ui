<template>
  <UiSheet class="flex flex-col gap-4 items-center">
    <Component :is="iconsMap[icon]" />
    <div class="text-center">
      <p class="text-xl font-semibold mb-2">{{ title }}</p>
      <p class="text-base">{{ subtitle }}</p>
    </div>
    <UiButtonAdd v-if="withButton" label="Добавить" @click="$emit('button-click')"/>
  </UiSheet>
</template>

<script setup lang="ts">
import HouseSadIcon from "~/components/icons/house-sad.vue";
import HouseSmileIcon from "~/components/icons/house-smile.vue";
import type { INoItemsSectionProps } from "~/types/ui.types";

const { icon = "sad", withButton = true } = defineProps<INoItemsSectionProps>();

defineEmits<{
  (e: 'button-click'):void
}>()

const iconsMap = {
  sad: HouseSadIcon,
  smile: HouseSmileIcon,
};
</script>

