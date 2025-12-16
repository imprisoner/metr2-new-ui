<template>
  <aside class="ps-7 flex flex-col gap-10 sticky top-[99px]">
    <PMenu :model="MAIN_NAV_ITEMS">
      <template #itemicon="{ class: classNames, item }">
        <span :class="classNames">
          <Component :is="MAIN_NAV_ITEMS_ICONS_MAP[item.icon!]" />
        </span>
      </template>
    </PMenu>
    <SidebarFilters />
  </aside>
</template>

<script setup lang="ts">
import { MAIN_NAV_ITEMS, MAIN_NAV_ITEMS_ICONS_MAP } from "~/components/const";
</script>

