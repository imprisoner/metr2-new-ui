<template>
  <PDialog
    v-model:visible="isVisible"
    dismissable-mask
    modal
    block-scroll
    :dt="dt"
    header="Войти"
    pt:header:class="pt-10 px-10 pb-4"
    class="w-115"
    >
    <template #closebutton>
      <PButton text rounded class="w-8 h-8 absolute right-4 top-4">
        <template #icon>
          <CrossIcon />
        </template>
      </PButton>
    </template>
    <LoginForm class="p-0!" />
  </PDialog>
</template>

<script setup lang="ts">
import type { DialogDesignTokens } from "@primeuix/themes/types/dialog";
import CrossIcon from "../icons/cross.vue";
const isVisible = ref(true);

const dt: DialogDesignTokens = {
  content: {
    padding: "0 2.5rem 2.5rem",
  },
  header: {
    padding: "0",
  },
  root: {
    borderRadius: "10px",
  },
  title: {
    fontSize: '21px'
  }
};
</script>

<style scoped></style>

