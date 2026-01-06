<template>
  <div class="flex p-2 relative">
    <div class="flex w-14 h-14 rounded-sm">
      <img :src="imageSrc" alt="" class="w-full h-full object-fit" />
    </div>
    <div class="flex flex-col gap-1">
      <p class="text-base">{{ filename }}</p>
      <PBadge v-if="successfulUpload" severity="success" value="Готово" />
      <PProgressBar v-else />
    </div>
    <!-- close button -->
    <div class="flex w-8 h-8 absolute top-2 right-2">
      <CrossIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import CrossIcon from "~/components/icons/cross.vue";

defineProps<{
  imageSrc: string;
  filename: string;
  successfulUpload: boolean;
}>();
</script>

<style scoped></style>
