<template>
  <div class="flex p-2 relative gap-2">
    <div class="flex w-14 h-14 rounded-sm overflow-hidden">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        alt=""
        class="w-full h-full object-fit"
      />
    </div>
    <div class="flex flex-col gap-1 flex-1 justify-between">
      <p class="text-base pt-2 uppercase">{{ file.name }}</p>
      <PBadge v-if="successfulUpload" severity="success" value="Готово" />
      <PProgressBar
        v-else
        class="mb-2 w-full h-1.5"
        mode="indeterminate"
        :dt="progressBarDT"
      />
    </div>
    <!-- close button -->
    <div
      class="flex items-center justify-center w-8 h-8 absolute top-2 right-2 cursor-pointer"
      @click="$emit('remove', file)"
    >
      <CrossIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProgressBarDesignTokens } from "@primeuix/themes/types/progressbar";
import CrossIcon from "~/components/icons/cross.vue";
import fileToBase64 from "~/shared/utils/fileToBase64";

const { file } = defineProps<{
  file: File;
  successfulUpload: boolean;
}>();

defineEmits<{
  (e: 'remove', file: File): void
}>();

const imageSrc = ref<string>();

imageSrc.value = await fileToBase64(file);

const progressBarDT: ProgressBarDesignTokens = {
  root: {
    background: '#E5E7EB',
    borderRadius: '6px',
    height: '6px'
  },
  value: {
    background: '{primary.500}'
  }
}
</script>

