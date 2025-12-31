<template>
  <div class="flex flex-col gap-10">
    <UiSheet class="relative flex flex-col gap-4 overflow-hidden">
      <!-- user avatar, actions and background image -->
      <div class="flex items-end justify-between mt-28 mb-4">
        <img
          src="/images/profile-top-bg.webp"
          class="object-cover absolute left-0 top-0 h-50"
        />
        <div class="flex flex-col gap-4 z-1">
          <div
            class="user-avatar border-2 border-white rounded-full w-31 h-31 overflow-hidden"
          >
            <img :src="avatar" alt="" class="object-cover w-full h-full" />
          </div>
          <div class="flex items-center gap-2">
            <h1 class="text-5xl font-semibold">{{ name }}</h1>
            <span v-if="isOnline" class="text-xs text-custom-success"
              >В сети</span
            >
          </div>
        </div>
        <!--  -->
        <!-- actions -->
        <div class="flex gap-2">
          <PButton label="Подписаться" />
          <PButton outlined severity="secondary">
            <template #icon>
              <EnvelopeIcon />
            </template>
          </PButton>
          <!-- TODO profile more menu? -->
          <PButton text>
            <DotsIcon />
          </PButton>
        </div>
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

    <ProfilePageServicesSection />

    <ProfilePagePortfolioSection />
  </div>
</template>

<script setup lang="ts">
import DotsIcon from "~/components/icons/dots.vue";
import EnvelopeIcon from "~/components/icons/envelope.vue";

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

<style scoped>
/* .bg-tagir {
    background: center / cover no-repeat url('/images/profile-top-bg.webp');
  } */
</style>

