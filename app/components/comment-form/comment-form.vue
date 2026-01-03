<template>
  <div>
    <div class="flex gap-3">
      <PAvatar
        :size="size === 'sm' ? 'normal' : 'large'"
        label="U"
        shape="circle"
      />
      <PTextarea
        v-show="!showFullEditor"
        :size="size === 'sm' ? 'small' : 'large'"
        placeholder="Поделитесь мнением"
        class="flex-1"
        :class="heightClass"
        @focus="showFullEditor = true"
      />
      <UiWysiwygEditor v-show="showFullEditor" v-model:content="content" class="h-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { size } = defineProps<{
  size: "sm" | "lg";
}>();

const heightClass = size === "sm" ? "h-11" : "h-27";

const content = ref("")

const showFullEditor = ref(false)
</script>

<style scoped></style>

