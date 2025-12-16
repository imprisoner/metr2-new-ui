<template>
  <header
    class="flex px-7 py-2 justify-between bg-orange-500 text-white items-center top-0 z-50 sticky"
  >
    <nav class="flex gap-10 items-center">
      <NuxtLink to="/" class="w-14 h-10">
        <IconsLogo />
      </NuxtLink>
      <ul class="flex gap-6">
        <NuxtLink to="#"
          ><li class="flex gap-2">
            <IconsBuilding />
            Квартиры
          </li></NuxtLink
        >
        <NuxtLink to="#"
          ><li class="flex gap-2">
            <IconsHouse />
            Частные дома
          </li></NuxtLink
        >
        <NuxtLink to="#"
          ><li class="flex gap-2">
            <IconsCrown />
            Квартира дня
          </li></NuxtLink
        >
      </ul>
    </nav>

    <nav class="flex gap-8 items-center">
      <ul class="flex gap-6 items-center">
        <NuxtLink to="#">
          <li>Сообщества</li>
        </NuxtLink>
        <NuxtLink to="#">
          <li>Подрядчики</li>
        </NuxtLink>
        <NuxtLink to="#">
          <li>Барахолка</li>
        </NuxtLink>
      </ul>
      <div class="flex items-center w-9 h-9">
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
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

