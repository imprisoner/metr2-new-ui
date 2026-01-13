<template>
  <ClientOnly>
    <div
      class="flex flex-col gap-4 flex-1 h-full justify-center lg:flex-auto max-w-full lg:w-217.5 pb-12 lg:pb-0"
    >
      <p class="text-2xl font-semibold">Фото профиля</p>
      <UiFileUpload @select="getImageFile" v-if="!imageSource">
        <UiUserAvatar size="xlarge" class="w-30 h-30" />
      </UiFileUpload>
      <div v-else class="flex flex-col gap-4">
        <ProfilePageImageCropper :image-source />
        <div class="flex gap-2 justify-end">
          <PButton
            outlined
            severity="secondary"
            label="Отмена"
            @click="onCancelCropping"
          />
          <PButton label="Сохранить" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { FileUploadSelectEvent } from "primevue";

const imageSource = ref<string>();

const getImageFile = async (event: FileUploadSelectEvent) => {
  imageSource.value = await fileToBase64(event.files[0]);
};

const onCancelCropping = () => {
  imageSource.value = undefined;
};
</script>

