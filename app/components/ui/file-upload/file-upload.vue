<template>
  <ClientOnly>
    <PFileUpload
      v-bind="$props"
      custom-upload
      basic
      :dt="dt"
      :pt="{
        header: 'py-4 px-0 flex-col gap-4',
        content: 'p-4 pt-0',
      }"
      @select="$emit('select', $event)"
      @upload="$emit('upload', $event)"
    >
      <template #header="{ chooseCallback }">
        <slot />
        <PButton label="Выбрать фото" class="mx-auto" @click="chooseCallback">
          <template #icon>
            <UploadIcon />
          </template>
        </PButton>
      </template>
      <template #content="{files}">
        <div
          v-if="files.length === 0"
          class="flex flex-col gap-4 text-center items-center text-base text-custom-secondary"
        >
          <p>или перетащите сюда картинку</p>
          <p>
            Рекомедуемый размер не менее 800рх в ширину.<br />JPG, PNG, WEBP не
            более 2мб
          </p>
        </div>
        <div v-else>
          
        </div>
      </template>
    </PFileUpload>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { FileUploadDesignTokens } from "@primeuix/themes/types/fileupload";
import type { FileUploadProps, FileUploadSelectEvent, FileUploadUploadEvent } from "primevue";
import UploadIcon from "~/components/icons/upload.vue";

defineProps<FileUploadProps>();
defineEmits<{
  (e: 'select', event: FileUploadSelectEvent): void;
  (e: 'upload', event: FileUploadUploadEvent): void;
}>();

const dt: FileUploadDesignTokens = {
  root: {
    borderColor: "#DFE7EF",
  },
};
</script>

