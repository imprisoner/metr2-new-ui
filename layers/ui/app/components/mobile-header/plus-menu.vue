<template>
  <UiPopoverWithBlock
    v-model:visible="visible"
    header="Написать"
    :icon="PlusIcon"
  >
    <UiMobileMenuLink
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
      :label="item.label"
      :icon="item.icon"
    />

    <UiDivider direction="horizontal"/>

    <UiMobileMenuLink 
      to="#"
      label="В черновики"
      :icon="SheetWithPencilIcon"
      :count="1"
      class="pt-5"
    />
  </UiPopoverWithBlock>
</template>

<script setup lang="ts">
import PlusIcon from "#layers/ui/app/icons/plus-icon.vue";
import DiariesIcon from "#layers/ui/app/icons/diaries-icon.vue";
import BookIcon from "#layers/ui/app/icons/book-icon.vue";
import PicDoubleIcon from "#layers/ui/app/icons/pic-double-icon.vue";
import SheetWithPencilIcon from "#layers/ui/app/icons/sheet-with-pencil-icon.vue";

const visible = defineModel("visible", { default: false });

const items = [
  {
    to: "#",
    label: "В дневник",
    icon: DiariesIcon,
  },
  {
    to: "#",
    label: "В блог",
    icon: BookIcon,
  },
  {
    to: "#",
    label: "В портфолио",
    icon: PicDoubleIcon,
  },
];
</script>

<style scoped></style>

