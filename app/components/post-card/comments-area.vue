<template>
  <div class="flex flex-col gap-4">
    <!-- counters -->
    <CountersSection />
    <!--  -->
    <div class="flex flex-col gap-4">
      <PostCardCommentPreview
        v-for="comment in mockComments"
        :key="comment.name"
        v-bind="comment"
      />
      <div class="flex gap-3 items-start">
        <UiUserAvatar
          label="U"
          shape="circle"
          class="shrink-0 mt-1"
        />
        <FormComment size="sm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mockComments = [
  {
    name: "Пётр С.",
    text: "Может раздвижную дверь между кроватью и кухней, а так очень хорошо.",
  },
  {
    name: "Walya",
    text: "Картинка красивая,но эргономики ноль.Телевизор на ноге посреди комнаты((((((. Что бы обходить его постоянно????Уверена на 100 % он рано или поздно будет, сбит,повален и разбит.Плитка в ванной тоже не внушает оптимизма в плане ухода, ну и вишенка на торте с люстрой на картинке, как то не удалась.Зачем смещать акцент на какую-то люстру, когда акцентным видится обалденный...",
  },
];
</script>
