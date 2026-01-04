<template>
  <div class="flex-1">
    <PEditor v-model="content" class="w-full" :dt="dt" editor-style="height: 250px;" :pt="{
      toolbar: 'px-3.5 py-[10.5px]',
      content: 'text-base'
    }">
      <template v-slot:toolbar>
        <span class="ql-formats">
          <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
          <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
          <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
          <button v-tooltip.bottom="'Image'" class="ql-image"></button>
        </span>
      </template>
    </PEditor>
  </div>
</template>

<script setup lang="ts">
import type { EditorDesignTokens } from "@primeuix/themes/types/editor";

const content = defineModel<string>("content");

const dt: EditorDesignTokens = {
  toolbar: {
    borderColor: "#E2E8F0",
    borderRadius: "6px",
  },
  content: {
    borderColor: "#E2E8F0",
    borderRadius: "6px",
  },
  toolbarItem: {
    color: "#6B7280",
  }
};
</script>

<style scoped>
  .ql-formats {
    display: flex;
    gap: 14px;
  }

  .ql-formats > * {
    padding: unset;
    width: 17.5px;
    height: 17.5px;
  }

  :deep(.ql-editor) {
    padding: 14px;
  }
</style>