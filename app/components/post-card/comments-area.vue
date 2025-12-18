<template>
  <div class="flex flex-col gap-4">
    <!-- counters -->
    <div class="flex justify-between">
      <div class="flex gap-2 items-center">
        <p class="hidden lg:block text-xl font-semibold">Комментарии</p>
        <UiCounter :icon="CommentIcon" :count="12" />
      </div>
      <div class="flex gap-4">
        <UiCounter :icon="FavoriteIcon" :count="2" />
        <UiCounter :icon="HeartIcon" :count="39" />
      </div>
    </div>
    <!--  -->
    <div class="flex flex-col gap-4">
      <PostCardCommentPreview
        v-for="comment in mockComments"
        :key="comment.name"
        v-bind="comment"
      />
      <CommentForm size="sm"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommentIcon from "~/components/icons/comment.vue";
import FavoriteIcon from "~/components/icons/favorite.vue";
import HeartIcon from "~/components/icons/heart.vue";

const mockComments = [
  {
    avatarUrl: "",
    name: "Пётр С.",
    text: "Может раздвижную дверь между кроватью и кухней, а так очень хорошо.",
  },
  {
    avatarUrl: "",
    name: "Walya",
    text: "Картинка красивая,но эргономики ноль.Телевизор на ноге посреди комнаты((((((. Что бы обходить его постоянно????Уверена на 100 % он рано или поздно будет, сбит,повален и разбит.Плитка в ванной тоже не внушает оптимизма в плане ухода, ну и вишенка на торте с люстрой на картинке, как то не удалась.Зачем смещать акцент на какую-то люстру, когда акцентным видится обалденный...",
  },
];
</script>

<style scoped></style>

