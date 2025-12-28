<template>
  <PDialog
    ref="dialogRef"
    v-model:visible="visibility"
    dismissable-mask
    modal
    block-scroll
    maximizable
    :dt="dt"
    pt:content:class="justify-center flex flex-col"
    class="w-115"
  >
    <template #maximizebutton>
      <span />
    </template>
    <template #closebutton>
      <PButton
        text
        rounded
        class="w-8 h-8 absolute right-4 top-4"
        @click="
          () => {
            visibility = false;
          }
        "
      >
        <template #icon>
          <CrossIcon />
        </template>
      </PButton>
    </template>
    <slot />
  </PDialog>
</template>

<script setup lang="ts">
import type { DialogDesignTokens } from "@primeuix/themes/types/dialog";
import CrossIcon from "~/components/icons/cross.vue";

const visibility = defineModel<boolean>("visible")

interface PDialogInstance {
  maximize: () => void;
  close: () => void;
}

const dialogRef = ref<PDialogInstance | null>(null);

const dt: DialogDesignTokens = {
  content: {
    padding: "2.5rem",
  },
  header: {
    padding: "0",
  },
  root: {
    borderRadius: "10px",
  },
  title: {
    fontSize: "21px",
  },
};

onMounted(() => {
  console.log(dialogRef.value)
  dialogRef.value?.maximize()
})
</script>

