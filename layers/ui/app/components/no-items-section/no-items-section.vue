<template>
  <UiSheet class="flex flex-col gap-4 items-center shadow-none" v-bind="uiSheetProps">
    <Component :is="iconsMap[icon]" />
    <slot>
      <div class="text-center">
        <p v-if="title" class="text-xl font-semibold mb-2">{{ title }}</p>
        <p v-if="subtitle" class="text-base text-custom-secondary">{{ subtitle }}</p>
      </div>
    </slot>
    <slot name="button">
      <UiButtonAdd v-if="withButton" label="Добавить" @click="$emit('button-click')"/>
    </slot>
  </UiSheet>
</template>

<script setup lang="ts">
import HouseSadIcon from "#layers/ui/app/icons/house-sad-icon.vue";
import HouseSmileIcon from "#layers/ui/app/icons/house-smile-icon.vue";
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

