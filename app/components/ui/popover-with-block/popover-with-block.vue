<template>
  <PPopover
    ref="popover"
    dismissable
    class="w-screen left-0"
    :auto-z-index="false"
    :base-z-index="10"
    @show="blocked = true"
    @hide="blocked = false"
    style="z-index: 10"
  >
    <slot />
  </PPopover>
  <PBlockUI
    full-screen
    :blocked="blocked"
    :auto-z-index="false"
    style="z-index: 9; top: 56px;"
  />
</template>

<script setup lang="ts">
import type { Popover } from "primevue";

const blocked = defineModel<boolean>("visible", { default: false });

const popover = ref<InstanceType<typeof Popover> | null>(null);

const toggle = (event: PointerEvent) => {
  if (!popover.value) return;

  popover.value.toggle(event);
};

defineExpose({
  toggle,
});
</script>

<style scoped></style>
