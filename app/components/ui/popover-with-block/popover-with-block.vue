<template>
  <RoundWhiteButton :icon="icon" @click="visible = !visible"/>
  <PDialog
    v-model:visible="visible"
    modal
    position="top"
    dismissable-mask
    block-scroll
    :closable="false"
    :pt="{
      root: {
        class: 'p0 w-full m-0 rounded-t-none',
      },
      header: {
        class: headerClass,
      },
      content: {
        class: 'px-2 py-4',
      },
      mask: {
        class: 'top-14!',
      },
    }"
  >
    <template #header>
      <h6 v-if="header" class="text-2xl font-semibold">{{ header }}</h6>
      <PButton text rounded class="ms-auto w-8 h-8" @click="visible = false">
        <template #icon>
          <CrossIcon />
        </template>
      </PButton>
    </template>
    <slot />
  </PDialog>
</template>

<script setup lang="ts">
import type { Popover } from "primevue";
import type { Component } from "vue";
import CrossIcon from "~/components/icons/cross.vue";
import RoundWhiteButton from "../round-white-button/round-white-button.vue";

const { header } = defineProps<{ header?: string; icon: Component }>();

const visible = defineModel<boolean>("visible", { default: false });

const popover = ref<InstanceType<typeof Popover> | null>(null);

const toggle = (event: PointerEvent) => {
  if (!popover.value) return;

  popover.value.toggle(event);
};

defineExpose({
  toggle,
});

const headerClass = computed(() => {
  return header
    ? "px-5 py-4 border-b-custom-divider border-b justify-between"
    : "absolute right-5 top-4 p-0";
});

</script>

<style scoped></style>

