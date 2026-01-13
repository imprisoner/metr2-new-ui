<template>
  <PButton
    rounded
    variant="outlined"
    class="bg-white border-white w-8 h-8"
    @click="$emit('click')"
  >
    <template #icon>
      <div class="w-3.5 h-3.5 flex">
        <Component :is="icon" />
      </div>
    </template>
  </PButton>
</template>

<script setup lang="ts">
defineProps<{ icon: Component }>();

defineEmits<{ (e: "click"): void }>();
</script>

<style scoped></style>
