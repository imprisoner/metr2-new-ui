<template>
  <ClientOnly>
    <div class="cropper">
      <div class="flex flex-col-reverse max-w-full">
        <Cropper
          class="max-h-75! mx-auto rounded-[10px] overflow-hidden"
          :src="imageSource"
          :stencil-component="CircleStencil"
          :resize-image="false"
          :debounce="false"
          image-restriction="fit-area"
          @change="handleCropChange"
        />
        <div class="p-4">
          <div
            class="flex w-30 h-30 bg-black rounded-full overflow-hidden mx-auto"
          >
            <preview
              v-if="result"
              :width="120"
              :height="120"
              :image="result.image"
              :coordinates="result.coordinates"
            />
            <ProgressSpinner v-if="showSpinner && result" class="m-auto" />
          </div>
        </div>
      </div>
      <div class="flex gap-2 mt-4 justify-end">
        <Button label="Назад" severity="secondary" @click="$emit('cancel')" />
        <Button label="Сохранить" @click="onCropConfirm" :loading="isLoading" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import {
  Cropper,
  CircleStencil,
  Preview,
  type CropperResult,
} from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import canvasToBase64 from "~/shared/utils/canvasToBase64";

const { imageSource } = defineProps<{
  imageSource: string;
}>();

const emit = defineEmits<{
  (e: "crop", value: string): void;
  (e: "cancel"): void;
}>();

const result = ref<CropperResult>();

const showSpinner = ref(false);

const handleCropChange = async (e: CropperResult) => {
  result.value = e;
};

const isLoading = ref(false);

const onCropConfirm = () => {
  if (result.value) {
    isLoading.value = true;
    emit("crop", canvasToBase64(result.value.canvas!));
  }
};
</script>