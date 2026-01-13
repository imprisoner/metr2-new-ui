<template>
  <div
    class="flex flex-col py-2 absolute top-12 right-0 w-60 bg-white rounded-lg custom-popover z-50"
    @mouseleave="$emit('mouseleave')"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineEmits(["mouseleave"]);
</script>

