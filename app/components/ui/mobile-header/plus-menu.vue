<template>
  <UiPopoverWithBlock
    v-model:visible="visible"
    ref="popover"
    header="Написать"
    :icon="IconPlus"
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
import IconPlus from "@/components/icons/plus.vue";
import DiariesIcon from "~/components/icons/diaries.vue";
import BookIcon from "~/components/icons/book.vue";
import PicDoubleIcon from "~/components/icons/pic-double.vue";
import SheetWithPencilIcon from "~/components/icons/sheet-with-pencil.vue";

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

