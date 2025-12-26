<template>
  <PButton text @click="toggle">
    <template #icon>
      <DotsIcon />
    </template>
  </PButton>
  <ClientOnly>
    <div
      class="flex flex-col py-2 absolute top-12 right-0 w-60 bg-white rounded-lg custom-popover"
      v-if="!isHidden"
    >
      <template
        v-for="(item, index) in POST_CARD_MORE_MENU_ITEMS"
        :key="index"
      >
      <PButton
        v-if="item.type === 'button'"
        :label="item.props.label"
        severity="secondary"
        text
        class="justify-start w-full rounded-none"
      >
        <template #icon>
          <span class="h-5 w-5 me-2">
            <Component :is="item.props.icon" class="w-full h-full" />
          </span>
        </template>
      </PButton>
      <UiDivider v-else-if="item.type === 'divider'" v-bind="item.props" class="my-1"/>
    </template>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import DotsIcon from "~/components/icons/dots.vue";
import { POST_CARD_MORE_MENU_ITEMS } from "../const";

const isHidden = ref(true);

const toggle = () => {
  isHidden.value = !isHidden.value;
};
</script>

<style scoped>
.custom-popover {
  box-shadow: 0px 2px 12px 0px #0000001a;
}
</style>

