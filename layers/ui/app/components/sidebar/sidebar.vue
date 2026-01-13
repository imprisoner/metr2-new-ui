<template>
  <aside
    ref="sidebar"
    class="ps-7 flex flex-col gap-10"
    :class="{ sticky: shouldStick }"
    :style="{
      top: stickyTopPositionValue + 'px',
    }"
  >
    <PMenu :model="MAIN_NAV_ITEMS">
      <template #itemicon="{ class: classNames, item }">
        <span class="h-5 w-5" :class="classNames">
          <Component
            :is="MAIN_NAV_ITEMS_ICONS_MAP[item.icon!]"
            class="w-full h-full"
          />
        </span>
      </template>
    </PMenu>
    <SidebarFilters />
    <AboutLinksSection />
  </aside>
</template>

<script setup lang="ts">
import { MAIN_NAV_ITEMS, MAIN_NAV_ITEMS_ICONS_MAP } from "~/const";
import { useWindowScroll, useElementSize } from "@vueuse/core";
import type { StyleValue } from "vue";

const HEADER_AND_PADDING_HEIGHT = 99;
const BOTTOM_SIDEBAR_VISIBILITY_POSITION_TOP_VALUE = -80;

const { x, y, directions, isScrolling, arrivedState } = useWindowScroll();

const sidebarRef = useTemplateRef("sidebar");

const { height } = useElementSize(sidebarRef);

const minimumHeight = computed(() => {
  return height.value + 40 + 59;
});

const sidebarFitsScreen = computed(
  () => {
    if (window === undefined) return false;
    return window.innerHeight > minimumHeight.value}
);

const windowBottomReachedBottomOfSidebar = computed(() => {
  if (window === undefined) return false;
  return y.value + window.innerHeight > minimumHeight.value;
});

const stickyTopPositionValue = computed(() => {
  // if (sidebarFitsScreen.value) {
  //   return HEADER_AND_PADDING_HEIGHT
  // }

  // if (directions.bottom) {
  //   BOTTOM_SIDEBAR_VISIBILITY_POSITION_TOP_VALUE
  // }

  return sidebarFitsScreen.value
    ? HEADER_AND_PADDING_HEIGHT
    : BOTTOM_SIDEBAR_VISIBILITY_POSITION_TOP_VALUE;
});

const shouldStick = computed(() => {
  if (sidebarFitsScreen.value) {
    return true;
  }

  return windowBottomReachedBottomOfSidebar.value;
});
</script>

