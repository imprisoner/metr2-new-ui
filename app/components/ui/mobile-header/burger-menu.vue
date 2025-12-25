<template>
  <PButton
    rounded
    variant="outlined"
    class="bg-white border-white w-8 h-8"
    @click="popover?.toggle"
  >
    <template #icon>
      <IconsBurger />
    </template>
  </PButton>
  <UiPopoverWithBlock v-model:visible="showMenu" ref="popover">
    <UiHeaderNavigation :is-mobile="true" />
  </UiPopoverWithBlock>
</template>

<script setup lang="ts">
import UiPopoverWithBlock from "@/components/ui/popover-with-block/popover-with-block.vue";

const showMenu = ref(false);

const popover = ref(<InstanceType<typeof UiPopoverWithBlock> | null>(null));
</script>
