<template>
  <div
    class="flex gap-4 relative comment-item w-full"
    @mouseenter="showDotsMenuButton = true"
    @mouseleave="showDotsMenuButton = false"
  >
    <UiUserAvatar size="large" class="shrink-0" />
    <div class="flex flex-col gap-1 flex-1">
      <div class="flex gap-2 items-center">
        <p class="text-base font-semibold">{{ name }}</p>
        <span class="text-[12.25px] text-custom-secondary">{{
          publishDate
        }}</span>
      </div>
      <p class="text-base">{{ text }}</p>
      <div class="flex gap-4 text-custom-secondary mb-1">
        <UiCounter type="likes" :count="likesCount" size="sm" />
        <p @click="mentionUser" class="text-base font-semibold">Ответить</p>
      </div>
      <UiAccordion>
        <template v-if="children" #header>
          <span class="text-base font-semibold"
            >{{ children.length }} ответ</span
          >
        </template>
        <!--  -->
        <CommentItem v-for="comment in children" v-bind="comment" />
      </UiAccordion>
    </div>
    <CommentItemActions
      v-show="showDotsMenuButton || isMenuVisible"
      :mobile="mobile"
      class="comment-item__actions absolute right-0 top-0"
      @toggle="onToggle"
    />
  </div>
</template>

<script setup lang="ts">
import type { ICommentItem } from "~/types/ui.types";

const props = defineProps<ICommentItem & { mobile?: boolean }>();

const mentionUser = () => {};

const showDotsMenuButton = ref(false);
const isMenuVisible = ref(false);

const onToggle = (v: boolean) => {
  isMenuVisible.value = v;
};
</script>

