<template>
  <PDialog
    ref="dialog"
    v-model:visible="store.visible"
    v-bind="props"
    class="lg:min-w-115 max-w-full"
    pt:content:class="lg:items-center lg:flex lg:justify-center p-4 lg:p-10 pt-0!"
    pt:header:class="justify-end"
  >
    <template #maximizebutton>
      <span />
    </template>
    <template #closebutton>
      <PButton
        text
        rounded
        class="w-8 h-8 flex ms-auto self-end"
        @click="
          () => {
            store.visible = false;
          }
        "
      >
        <template #icon>
          <CrossIcon />
        </template>
      </PButton>
    </template>
    <Component v-if="store.currentComponent" :is="store.currentComponent" />
  </PDialog>
</template>

<script setup lang="ts">
import type { Dialog } from "primevue";
import CrossIcon from "~/components/icons/cross.vue";
import { props } from "~/const/components/dialog";

const dialogRef = useTemplateRef<typeof Dialog & { maximize: () => void }>(
  "dialog"
);

const { isMobile } = useDevice();

const store = useDialogStore();

onUpdated(() => {
  if (isMobile || store.dialogProps.maximize) dialogRef.value?.maximize();
});
</script>

