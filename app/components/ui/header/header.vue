<template>
  <header
    class="flex px-7 py-2 justify-between bg-orange-500 text-white items-center top-0 z-50 sticky"
  >
    <NuxtLink to="/" class="w-14 h-10 mr-10">
      <IconsLogo />
    </NuxtLink>
    <UiHeaderNavigation />
    <div class="flex items-center justify-center w-9 h-9 mx-8">
      <IconsMagnify />
    </div>
    <PButton
      variant="outlined"
      class="text-white rounded-full border-[#FFFFFF33]"
      label="Войти"
    >
      <template #icon>
        <IconsUser />
      </template>
    </PButton>
  </header>
  <DialogLoginOrRegister />
</template>

<script setup lang="ts"></script>

