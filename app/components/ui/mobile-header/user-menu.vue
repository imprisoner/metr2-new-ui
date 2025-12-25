<template>
  <UiPopoverWithBlock
    v-model:visible="visible"
    ref="popover"
    header="Написать"
    :icon="UserIcon"
  >
    <UiMobileMenuItem
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
      :label="item.label"
      :icon="item.icon"
      :count="item.count"
    />

    <UiDivider direction="horizontal" />

    <UiMobileMenuItem
      v-for="(item, index) in footerItems"
      :key="index"
      :to="item.to"
      :label="item.label"
      :icon="item.icon"
      :count="item.count"
      :class="{
        'pt-5': index === 0
      }"
    />
  </UiPopoverWithBlock>
</template>

<script setup lang="ts">
import DiariesIcon from "~/components/icons/diaries.vue";
import BookIcon from "~/components/icons/book.vue";
import PicDoubleIcon from "~/components/icons/pic-double.vue";
import CardIcon from "~/components/icons/card.vue";
import StarIcon from "~/components/icons/star.vue";
import SheetWithPencilIcon from "~/components/icons/sheet-with-pencil.vue";
import ArrowIcon from "~/components/icons/arrow.vue";
import UserIcon from "~/components/icons/user.vue";

const visible = defineModel("visible", { default: false });

const items = [
  {
    to: "#",
    label: "Дневники",
    icon: DiariesIcon,
  },
  {
    to: "#",
    label: "Блог",
    icon: BookIcon,
  },
  {
    to: "#",
    label: "Портфолио",
    icon: PicDoubleIcon,
  },
  {
    to: "#",
    label: "Услуги",
    icon: CardIcon,
  },
  {
    to: "#",
    label: "Отзывы",
    icon: StarIcon,
  },
  {
    to: "#",
    label: "Черновики",
    icon: SheetWithPencilIcon,
    count: 1,
  },
];

const footerItems = [
  {
    to: "#",
    label: "Сообщения",
    icon: ArrowIcon,
    count: 2,
  },
  {
    to: "#",
    label: "Профиль",
    icon: UserIcon,
  },
];
</script>
