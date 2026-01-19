<template>
  <header
    class="flex px-7 py-2 justify-between bg-orange-500 text-white items-center top-0 z-50 sticky"
  >
    <NuxtLink to="/" class="w-14 h-10 mr-10">
      <LogoIcon />
    </NuxtLink>
    <UiHeaderNavigation />
    <UiHeaderButton
      :icon="MagnifyIcon"
      class="mx-6 w-9.5 h-9.5"
      :border="false"
    />
    <NuxtLink v-if="isAuthorized" to="/profile">
      <UiHeaderButton label="Профиль" :icon="UserIcon" />
    </NuxtLink>
    <UiHeaderButton v-else label="Войти" @click="showForm('login')" />
  </header>
</template>

<script setup lang="ts">
import MagnifyIcon from "../../icons/magnify-icon.vue";
import UserIcon from "../../icons/user-icon.vue";
import UiHeaderButton from "./header-button.vue";

const { showForm } = useLoginOrRegisterDialog();

const { isAuthorized } = storeToRefs(useAuthStore());
</script>

