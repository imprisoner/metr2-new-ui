<template>
  <PSelectButton
    v-model="modelValue"
    :options="options"
    class="custom-select-button"
    fluid
  />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>();

const options = ["Квартира", "Частный дом"];
</script>

<style scoped>
:deep(button) {
  font-size: 14px;
  flex: 1;
  padding: 10.5px 0;
}
</style>

