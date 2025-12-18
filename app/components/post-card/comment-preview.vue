<template>
  <div class="flex gap-3">
    <div>
      <UiUserAvatar size="normal" :image-url="avatarUrl"/>
    </div>
    <div class="text-custom-secondary">
      <div class="text-[12.25px] font-semibold">{{ name }}</div>
      <div class="text-base">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    avatarUrl: string;
    name: string;
    text: string;
  }>()
</script>

<style scoped>

</style>