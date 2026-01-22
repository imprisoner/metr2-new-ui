<template>
  <div class="flex flex-col gap-10 pb-10">
    <UiSheet class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <!-- TODO some error -->
        <!-- <UiBreadcrumbs v-bind="breadcrumbs" /> -->
        <h1 class="text-5xl">Моя квартирка</h1>
      </div>
      <!--  -->
      <div class="flex flex-col gap-4">
        <!-- <UserSection :share-button-props="{ outlined: false }" /> -->
        <UiDivider direction="horizontal" />
        <div class="flex gap-8">
          <UiCounterLg
            v-for="item in counters"
            :key="item.label"
            :count="item.count"
          >
            {{ item.label }}
          </UiCounterLg>
        </div>
      </div>
      <!--  -->
      <UiImagesGrid :images="MOCK_IMAGES" class="h-100" />
      <!--  -->
      <p
        class="ellipsis-3 text-xl"
        :class="{
          'animate-expand': isTextExpanded,
        }"
      >
        {{ text }}
      </p>
      <!--  -->
      <div
        class="flex gap-2 items-center cursor-pointer"
        @click="toggleExpandText"
      >
        <span class="text-base font-semibold">Показать полностью</span>
        <ChevronUpIcon
          :class="{
            'rotate-180': isTextExpanded,
          }"
        />
      </div>
    </UiSheet>
    <UiSheet class="text-center"> Здесь могла быть ваша реклама </UiSheet>

    <!-- ДНЕВНИК -->
    <div class="flex flex-col gap-6">
      <div class="flex flex-1 justify-between">
        <h2 class="text-5xl font-semibold p-4 lg:p-0">
          Дневник <span class="text-custom-secondary">14</span>
        </h2>
        <UiSelect :options="['Свежее','Популярное']" default-value="Свежее" />
      </div>
      <!-- <PostCard v-for="i in 2" :key="i" /> -->
    </div>
    <!--  -->
    <UiTextWithLines>Вы прочитали все записи дневника</UiTextWithLines>
    <!--  -->
    <div class="flex flex-col py-10 items-center justify-center gap-4">
      <div class="flex flex-col gap-2">
        <UiUserAvatar size="xlarge" :image-url="user.avatarUrl" />
        <span class="text-xl font-semibold">{{ user.name }}</span>
      </div>

      <div>
        <p class="text-xl font-semibold text-center">
          Если нравится - подпишитесь
        </p>
        <p class="text-base text-custom-secondary text-center">
          Так вы не пропустите новые публикации автора
        </p>
      </div>

      <PButton label="Подписаться" />
    </div>

    <UiDivider />
  </div>
</template>

<script setup lang="ts">
import { MOCK_IMAGES } from "~/const/mock";

const breadcrumbs = {
  home: { route: "/", label: "Лента" },
  model: [
    {
      route: "#",
      label: "Nilin743",
    },
  ],
};

const counters = [
  {
    count: 14,
    label: "записей",
  },
  {
    count: 45000,
    label: "лайков",
  },
  {
    count: 834,
    label: "сохранено",
  },
];

const text =
  "Я купил эту брежневку почти как по наитию: двухкомнатная, 52 квадрата на третьем этаже — не хрущёвка, но и не дворец. В квартире был обычный «советский набор»: коридор‑труба, раздельный санузел, окна во двор и на шумную улицу, балкон, который давно просился на терассу. Мне хотелось не просто отремонтировать, а сделать что‑то с характером — лаконичное и чуть грубое, но при этом уютное. Решил идти в лофт, но с одной оговоркой: дизайнерская отделка, чтобы всё было аккуратно и с продуманными решениями, а не «голая кирпичная стена и лампочка». Работы шли в два этапа: сначала концепция и демонтаж частичных перегородок и старых покрытий, потом сборка индивидуальной мебели и финишные штрихи. Главное правило было простое — сохранить планировку двух комнат, но визуально сделать пространство просторнее и более свободным.";

const isTextExpanded = ref(false);

const toggleExpandText = () => {
  isTextExpanded.value = !isTextExpanded.value;
};

const user = { name: "Julia Sh.", avatarUrl: undefined };
</script>

<style scoped>
.ellipsis-3 {
  line-height: 1.5;
  max-height: calc(1.5em * 3);
  overflow: hidden;
  animation: collapseText 0.6s forwards;
}

/* Animation */
.animate-expand {
  animation: expandText 0.6s ease forwards;
}

@keyframes expandText {
  0% {
    max-height: calc(1.5em * 3);
  }

  100% {
    max-height: 1000px; /* large enough to fit text */
    /* -webkit-line-clamp: unset; */
  }
}

@keyframes collapseText {
  100% {
    max-height: calc(1.5em * 3);
  }

  0% {
    max-height: 1000px; /* large enough to fit text */
    /* -webkit-line-clamp: unset; */
  }
}
</style>

