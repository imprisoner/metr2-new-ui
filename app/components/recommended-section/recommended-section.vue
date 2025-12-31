<template>
  <UiSheet class="flex flex-col gap-6" v-bind="uiSheetProps">
    <p v-if="title" class="text-base text-custom-secondary font-semibold">
      {{ title }}
    </p>

    <div class="flex flex-col gap-4">
      <template v-for="(card, index) in recommended" :key="index">
        <PostPreviewCard v-bind="card" />
        <hr v-if="!isLast(index)" class="w-full text-custom-divider" />
      </template>
    </div>

    <PButton
      v-if="withButton"
      outlined
      severity="secondary"
      :label="buttonLabel"
      :class="{ 'self-start': !blockButton }"
    />
  </UiSheet>
</template>

<script setup lang="ts">
import { RECOMMENDED_POSTS } from "~/const/mock";

const {
  buttonLabel = "Показать ещё",
  withButton = true,
  blockButton = true,
} = defineProps<{
  title?: string;
  withButton?: boolean;
  buttonLabel?: string;
  blockButton?: boolean;
  uiSheetProps?: { title: string; count?: number };
}>();

defineEmits<{ (e: "button-click"): void }>();

const recommended = RECOMMENDED_POSTS;

const isLast = (index: number) => {
  return index === recommended.length - 1;
};
</script>

<style scoped></style>

