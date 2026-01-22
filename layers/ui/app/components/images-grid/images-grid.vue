<template>
  <div class="flex gap-px rounded-md overflow-hidden">
    <div class="flex-8">
      <img :src="titleImage" class="bg-yellow-400 w-full h-full object-cover" />
    </div>
    <!--  -->
    <div v-if="sideImages.length" class="grid gap-px flex-2" :class="`grid-rows-${sideImages.length}`">
      <template v-for="(image, index) in sideImages" :key="index">
        <div
          v-if="index === sideImages.length - 1 && restImagesCount > 0"
          class="relative"
        >
          <p
            class="text-white flex gap-1 align-baseline absolute inset-0 justify-center items-center z-1"
          >
            <PicIcon />
            <span class="font-semibold text-[10.5px]"
              >ещё {{ restImagesCount }} фото</span
            >
          </p>
          <img :src="image" class="w-full h-full object-cover brightness-55" />
        </div>
        <div v-else>
          <img :src="image" class="w-full h-full object-cover" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const MAX_SHOWED_IMAGES = 5;

const { images } = defineProps<{ images: string[] }>();

const titleImage = images[0];
const sideImages = images.slice(1, MAX_SHOWED_IMAGES).filter((item) => !!item);
const restImagesCount = images.length - MAX_SHOWED_IMAGES;
</script>

