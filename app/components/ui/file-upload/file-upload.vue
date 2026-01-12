<template>
  <PFileUpload
    v-bind="$props"
    custom-upload
    basic
    :dt="dt"
    :pt="{
      root: 'p-4 flex flex-col-reverse flex-1 lg:rounded-lg' + ' ' + rootJustifyClassName,
      header: 'flex-col gap-4',
      content: 'p-0'
    }"
    pt:root:class=""
    @select="selectHandler"
    @upload="uploadHandler"
    @remove="removeHandler"
  >
    <template #header="{ chooseCallback }">
      <slot />
      <PButton label="Выбрать фото" class="mx-auto h-11.5" @click="chooseCallback">
        <template #icon>
          <UploadIcon />
        </template>
      </PButton>
      <div
        class="flex flex-col gap-4 text-center items-center text-base text-custom-secondary"
      >
        <p>или перетащите сюда картинку</p>
        <p>
          Рекомедуемый размер не менее 800рх в ширину.<br />JPG, PNG, WEBP
          не более 2мб
        </p>
      </div>
    </template>
    <template #content="{ files, messages, progress, removeFileCallback }">
      <div class="flex flex-col gap-4" v-if="multiple && files.length !== 0">
        <UiFileUploadItem
          v-for="(file, index) in files"
          :key="file.lastModified + file.name"
          :file
          :successful-upload="false"
          @remove="removeFileCallback(index)"
        />
      </div>
    </template>
  </PFileUpload>
</template>

<script setup lang="ts">
import type { FileUploadDesignTokens } from "@primeuix/themes/types/fileupload";
import type {
  FileUploadProps,
  FileUploadRemoveEvent,
  FileUploadSelectEvent,
  FileUploadUploadEvent,
} from "primevue";
import UploadIcon from "~/components/icons/upload.vue";

defineProps<FileUploadProps>();
const emits =defineEmits<{
  (e: "select", event: FileUploadSelectEvent): void;
  (e: "upload", event: FileUploadUploadEvent): void;
  (e: "remove", event: FileUploadRemoveEvent): void;
}>();

const dt: FileUploadDesignTokens = {
  root: {
    borderColor: "#DFE7EF",
  },
};

const hasSelectedFiles = ref(false)
const rootJustifyClassName = computed(() => hasSelectedFiles.value ? 'justify-between' : 'justify-center')

const selectHandler = (event: FileUploadSelectEvent) => {
  emits('select', event)

  hasSelectedFiles.value = true
}

const uploadHandler = (event: FileUploadUploadEvent) => {
  emits('upload', event)
}

const removeHandler = (event: FileUploadRemoveEvent) => {
  emits('remove', event)

  hasSelectedFiles.value = event.files.length !== 0
}

</script>

