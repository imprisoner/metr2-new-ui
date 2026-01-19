<template>
  <NuxtLink :to>
    <PButton
      :label="label"
      text
      :badge="count?.toString()"
      severity="secondary"
      badge-severity="warn"
      class="user-menu-nav-item justify-start text-xl font-medium"
      :class="{
        'justify-between!': quickAccess
      }"
      :dt="dt"
      fluid
    >
      <template v-if="icon" #icon>
        <Component :is="icon" class="w-5 h-5 text-custom-icon" />
      </template>
      <template v-if="quickAccess" #default>
        <div class="flex gap-2 items-center">
          <Component :is="icon" class="w-5 h-5 text-custom-icon" />
          {{ label }}
        </div>
        <PlusCircleIcon class="quick-access-icon text-white z-10" @click.prevent="onPlusIconClick" />
      </template>
    </PButton>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ComponentsDesignTokens } from "@primeuix/themes/types";
import type { IUserMenuButtonProps } from "~/types/ui.types";

defineProps<IUserMenuButtonProps>();

const dt: ComponentsDesignTokens["button"] = {
  root: {
    label: {
      fontWeight: "medium",
    },
    paddingX: "12px",
    paddingY: "12px",
  },
  colorScheme: {
    light: {
      text: {
        secondary: {
          color: "{primary.500}",
        },
      },
    },
  },
};

const onPlusIconClick = () => {
  // TODO handle click with hrefParams
}
</script>

<style scoped>
.user-menu-nav-item:hover > .quick-access-icon {
  color: var(--color-custom-icon)
}
</style>