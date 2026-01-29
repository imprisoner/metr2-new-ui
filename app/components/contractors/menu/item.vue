<template>
  <NuxtLink v-slot="{ href, navigate }" :to="route" custom>
    <a
      v-ripple
      :href="route ? href : undefined"
      v-bind="action"
      @click="onClick($event, navigate)"
    >
      <Component :is="icon" class="text-custom-icon w-5 h-5" />
      <span class="ml-2">{{ label }}</span>
    </a>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { MenuRouterBindProps } from "primevue";

const { route, command } = defineProps<{
  icon: Component;
  label: string;
  route?: string;
  action: MenuRouterBindProps["action"];
  command?: () => void;
}>();

const onClick = (e: MouseEvent, navigate: (e: MouseEvent) => void) => {
  if (route) navigate(e)
  if (command) command()
}
</script>

