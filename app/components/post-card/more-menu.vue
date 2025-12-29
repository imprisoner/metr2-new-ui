<template>
  <PButton text @click="toggle">
    <template #icon>
      <DotsIcon />
    </template>
  </PButton>
  <ClientOnly>
    <!-- <PostCardMoreMenuMobile v-model:visible="visible" /> -->
    <PostCardMoreMenuDesktop v-model:visible="visible"/>
  </ClientOnly>
</template>

<script setup lang="ts">
import DotsIcon from "~/components/icons/dots.vue";

const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};
</script>

<style scoped>
.custom-popover {
  box-shadow: 0px 2px 12px 0px #0000001a;
}
</style>
