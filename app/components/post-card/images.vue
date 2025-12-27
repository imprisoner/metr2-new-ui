<template>
  <div class="flex gap-px h-75 rounded-md overflow-hidden">
      <div class="flex-8">
        <img
          :src="titleImage"
          class="bg-yellow-400 w-full h-full object-cover"
        />
      </div>
      <!--  -->
      <div class="grid grid-rows-4 gap-px flex-2">
        <template v-for="(image, index) in sideImages" :key="index">
          <div
            v-if="index === sideImages.length - 1 && hasMoreImages"
            class="flex-1/4 relative"
          >
            <p
              class="text-white flex gap-1 align-baseline absolute inset-0 justify-center items-center z-1"
            >
              <IconsPic />
              <span class="font-semibold text-[10.5px]">ещё {{ restImagesCount }} фото</span>
            </p>
            <img
              :src="image"
              class="w-full h-full object-cover brightness-55"
            />
          </div>
          <div v-else class="flex-1/4">
            <img :src="image" class="w-full h-full object-cover" />
          </div>
        </template>
      </div>
    </div>
</template>

<script setup lang="ts">
import { MOCK_IMAGES } from '~/const/mock';

const images = MOCK_IMAGES

const titleImage = images[0];
const sideImages = images.slice(1, 5);

const MAX_SHOWED_IMAGES = 5;

const restImagesCount = images.length - MAX_SHOWED_IMAGES;

const hasMoreImages = restImagesCount > 0;
</script>

<style scoped>

</style>