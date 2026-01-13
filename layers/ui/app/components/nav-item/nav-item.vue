<template>
  <PButton
    :label="label"
    text
    :badge="count?.toString()"
    severity="secondary"
    badge-severity="warn"
    class="justify-start text-[16px]"
    :dt="dt"
  >
    <template v-if="icon" #icon>
      <Component :is="icon" class="w-5 h-5 text-custom-icon"/>
    </template>
  </PButton>
</template>

<script setup lang="ts">
import type { ComponentsDesignTokens } from "@primeuix/themes/types";
import type { Component } from "vue";

defineProps<{ label: string; count?: number; icon?: Component }>();

const dt: ComponentsDesignTokens['button'] = {
  root: {
    label: {
      fontWeight: "medium"
    },
  },
  colorScheme: {
    light: {
      text: {
        secondary: {
          color: "{primary.500}"
        }
      }
    }
  }
} 

</script>

