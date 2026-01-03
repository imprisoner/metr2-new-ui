<template>
  <div class="flex-1">
    <PEditor v-model="content" class="w-full">
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
const content = defineModel<string>("content");
</script>

<style scoped></style>
