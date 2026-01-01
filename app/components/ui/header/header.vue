<template>
  <header
    class="flex px-7 py-2 justify-between bg-orange-500 text-white items-center top-0 z-50 sticky"
  >
    <NuxtLink to="/" class="w-14 h-10 mr-10">
      <IconsLogo />
    </NuxtLink>
    <UiHeaderNavigation />
    <PButton
      text
      class="text-white rounded-full hover:border-[#FFFFFF66] active:border-[#FFFFFF99] w-9.5 h-9.5 mx-6"
      :dt="dt"
    >
      <template #icon>
        <IconsMagnify />
      </template>
    </PButton>
    <PButton
      outlined
      class="text-white rounded-full border-[#FFFFFF33] hover:border-[#FFFFFF66] active:border-[#FFFFFF99]"
      label="Войти"
      :dt="dt"
    >
      <template #icon>
        <IconsUser class="w-3.5 h-3.5" />
      </template>
    </PButton>
  </header>
</template>

<script setup lang="ts">
import type { ButtonDesignTokens } from "@primeuix/themes/types/button";

const dt: ButtonDesignTokens = {
  outlined: {
    primary: {
      activeBackground: "transparent",
      hoverBackground: "transparent",
    },
  },
  text: {
    primary: {
      activeBackground: "transparent",
      hoverBackground: "transparent",
    },
  },
};
</script>

