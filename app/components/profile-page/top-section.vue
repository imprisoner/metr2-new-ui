<template>
  <UiSheet class="relative flex flex-col gap-4 overflow-hidden pb-0!">
    <!-- user avatar, actions and background image -->
    <div class="flex flex-col lg:flex-row items-center lg:items-end gap-4 justify-between mt-28 mb-4">
      <img
        src="/images/profile-top-bg.webp"
        class="object-cover absolute left-0 top-0 h-50 w-full"
      />
      <div class="flex flex-col gap-4 z-1">
        <ProfilePageAvatarArea :avatar-url="avatar" />
        <div class="flex flex-col lg:flex-row items-center gap-2">
          <h1 class="text-5xl font-semibold">{{ name }}</h1>
          <span v-if="isOnline" class="text-xs text-custom-success"
            >В сети</span
          >
        </div>
      </div>
      <!--  -->
      <!-- actions -->
      <ProfilePageActionsArea />
    </div>
    <!--  -->

    <p class="text-xl font-semibold">
      <span
        v-for="city in cities"
        :class="{
          'text-custom-secondary': !city.isCapital,
        }"
        >{{ city.name }},
      </span>
    </p>
    <!--  -->

    <p class="text-base text-custom-secondary">{{ about }}</p>
    <!--  -->
    <UiDivider />
    <!--  -->

    <!-- counters -->
    <div class="flex gap-8">
      <UiCounterLg
        v-for="item in counters"
        :key="item.label"
        :count="item.count"
      >
        {{ item.label }}
      </UiCounterLg>
    </div>

    <UiDivider />

    <ProfilePageTabs />
  </UiSheet>
</template>

<script setup lang="ts">
const avatar = "/images/user-avatar.png";
const name = "Julia Sh.";
const isOnline = true;

const cities = [
  {
    name: "Волгоград",
    isCapital: true,
  },
  {
    name: "Волжский",
    isCapital: false,
  },
  {
    name: "Краснослободск",
    isCapital: false,
  },
  {
    name: "Калач-на-Дону",
    isCapital: false,
  },
];

const about =
  "Привет, я Юля! Я вместе с кошками Люся и Варя создаю уют и красоту. Буду рада, если вы подпишитесь ❤️";

const counters = [
  {
    count: "1 256",
    label: "подписок",
  },
  {
    count: "45K",
    label: "лайков",
  },
  {
    count: "14",
    label: "записей",
  },
  {
    count: "48",
    label: "подписок",
  },
];
</script>

<style scoped></style>
