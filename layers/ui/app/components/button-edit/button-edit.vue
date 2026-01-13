<template>
  <!-- @BUG prop "as" is necessary to avoid strange rendering of contents - they are out of <div id="nuxt"></div> if rendered as button -->
  <PButton text severity="secondary" as="div">
    <template #icon><PencilIcon /></template>
  </PButton>
</template>

<script setup lang="ts">
</script>

