<template>
  <aside ref="sidebar" class="ps-7 flex flex-col gap-10">
    <PMenu :model="CONTRACTOR_MENU_ITEMS" :dt="dt" :pt="{ separator: 'my-4' }">
      <template #item="{ item, props }">
        <ContractorsMenuItem
          :action="props.action"
          :icon="(item as IContractorsMenuNavItem).iconComponent"
          :route="item.route"
          :label="item.label as string"
          :command="item.id === ALL_SERVICES_MENU_ITEM_ID ? openMegaMenu : undefined"
        />
      </template>
    </PMenu>
    <AboutLinksSection />
  </aside>
</template>

<script setup lang="ts">
import type { MenuDesignTokens } from "@primeuix/themes/types/menu";
import { CONTRACTOR_MENU_ITEMS } from "~/const";
import type { IContractorsMenuNavItem } from "~/types/ui.types";

const dt: MenuDesignTokens = {
  item: {
    focusColor: "#323745",
    icon: {
      focusColor: "#838B9E",
    },
  },
  separator: {
    borderColor: "#E5E7EB",
  },
};
</script>
