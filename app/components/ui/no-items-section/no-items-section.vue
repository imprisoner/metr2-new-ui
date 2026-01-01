<template>
  <UiSheet class="flex flex-col gap-4 items-center" v-bind="uiSheetProps">
    <Component :is="iconsMap[icon]" />
    <slot>
      <div class="text-center">
        <p v-if="title" class="text-xl font-semibold mb-2">{{ title }}</p>
        <p v-if="subtitle" class="text-base">{{ subtitle }}</p>
      </div>
    </slot>
    <slot name="button">
      <UiButtonAdd v-if="withButton" label="Добавить" @click="$emit('button-click')"/>
    </slot>
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

