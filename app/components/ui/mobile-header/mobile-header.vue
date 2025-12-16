<template>
  <header>
    <div
      class="flex px-4 py-3 justify-between bg-orange-500 text-white items-center h-14"
    >
      <div class="flex gap-2">
        <PButton
          rounded
          variant="outlined"
          class="bg-white border-white w-8 h-8"
        >
          <template #icon>
            <IconsBurger />
          </template>
        </PButton>
        <NuxtLink to="/" class="flex">
          <IconsLogo class="h-full w-11" />
        </NuxtLink>
      </div>
      <div class="flex gap-2">
        <PButton
          rounded
          variant="outlined"
          class="bg-white border-white w-8 h-8"
        >
          <template #icon>
            <IconsMagnify />
          </template>
        </PButton>
        <PButton
          rounded
          variant="outlined"
          class="bg-white border-white w-8 h-8"
        >
          <template #icon>
            <IconsUser />
          </template>
        </PButton>
      </div>
    </div>
    <UiMobileNav />
  </header>
</template>

<script setup lang="ts">
</script>

