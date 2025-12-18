<template>
  <PButton
    rounded
    variant="outlined"
    class="bg-white border-white w-8 h-8"
    @click="toggle"
  >
    <template #icon>
      <IconsBurger />
    </template>
  </PButton>
  <PPopover ref="popover" dismissable class="w-screen left-0" >
    <UiHeaderNavigation :is-mobile="true" />
  </PPopover>
</template>

<script setup lang="ts">
import type { Popover } from "primevue";

const popover = ref<InstanceType<typeof Popover> | null>(null);
const toggle = (event: PointerEvent) => {
  console.log("Toggle burger menu", event);
  if (!popover.value) return;

  popover.value.toggle(event);
};
</script>

<style scoped></style>

