<template>
  <aside ref="sidebar" class="ps-7 flex flex-col gap-10">
    <PMenu :model="CONTRACTOR_MENU_ITEMS" :dt="dt" :pt="{separator: 'my-4'}">
      <template #itemicon="{ class: classNames, item }">
        <span class="h-5 w-5" :class="classNames">
          <Component
            :is="(item as INavItem).iconComponent"
            class="w-full h-full"
          />
        </span>
      </template>
    </PMenu>
    <AboutLinksSection />
  </aside>
</template>

<script setup lang="ts">
import type { MenuDesignTokens } from "@primeuix/themes/types/menu";
import { CONTRACTOR_MENU_ITEMS } from "~/const";
import type { INavItem } from "~/types/ui.types";

const dt: MenuDesignTokens = {
  item: {
    focusColor: "#323745",
    icon: {
      focusColor: "#838B9E",
    },
  },
  separator: {
    borderColor: "#E5E7EB"
  }
};
</script>

