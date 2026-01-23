<template>
  <div class="flex flex-col gap-10 pb-10">
    <UiSheet class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <!-- TODO some error -->
        <!-- <UiBreadcrumbs v-bind="breadcrumbs" /> -->
        <h1 class="text-5xl">{{ flatData.nickname }}</h1>
      </div>
      <!--  -->
      <div class="flex flex-col gap-4">
        <UserSection
          :share-button-props="{ outlined: false }"
          v-bind="flatData.user"
        />
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
      <UiImagesGrid :images="flatData.images" class="h-100" />
      <!--  -->
      <p
        class="ellipsis-3 text-xl"
        :class="{
          'animate-expand': isTextExpanded,
        }"
      >
        {{ flatData.description }}
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
          Дневник
          <span class="text-custom-secondary">{{ flatData.postsCount }}</span>
        </h2>
        <UiSelect :options="['Свежее', 'Популярное']" default-value="Свежее" />
      </div>
      <PostCard v-for="post in posts" :key="post.id" v-bind="post" />
    </div>
    <!--  -->
    <UiTextWithLines>Вы прочитали все записи дневника</UiTextWithLines>
    <!--  -->
    <UiSubscribeSection v-bind="flatData.user" />
    <!-- <div class="flex flex-col py-10 items-center justify-center gap-4">
      <div class="flex flex-col gap-2">
        <UiUserAvatar size="xlarge" :image-url="flatData.user.avatarUrl" />
        <span class="text-xl font-semibold">{{ flatData.user.name }}</span>
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
    </div> -->

    <UiDivider />
  </div>
</template>

<script setup lang="ts">
import { getEstateWithUserById } from "~/api/estate";
import { getFullPostsListByFlatId } from "~/api/posts";
import { MOCK_IMAGES } from "~/const/mock";

const route = useRoute("flats-id");
const flatId = route.params.id;

const flatData = await getEstateWithUserById(flatId);
const posts = await getFullPostsListByFlatId(flatId);

console.log(flatData)

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
    count: flatData.postsCount,
    label: "записей",
  },
  {
    count: flatData.likesCount,
    label: "лайков",
  },
  {
    count: flatData.favoritesCount,
    label: "сохранено",
  },
];

const isTextExpanded = ref(false);

const toggleExpandText = () => {
  isTextExpanded.value = !isTextExpanded.value;
};
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
