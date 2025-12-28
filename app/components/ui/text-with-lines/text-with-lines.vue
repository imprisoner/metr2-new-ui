<template>
  <div class="text-with-lines py-4.5 mb-2">
    <hr class="text-custom-divider" />
    <span class="text-nowrap text-custom-secondary font-bold text-base">
      <slot />
    </span>
    <hr class="text-custom-divider" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.text-with-lines {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
  justify-items: center;
}

.text-with-lines hr {
  width: 100%;
}
</style>
