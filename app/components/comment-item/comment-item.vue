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
      <PAccordion
        v-if="children"
        value="0"
        :unstyled="true"
        class="w-full"
        :dt="dt"
      >
        <template #expandicon>
          <ChevronUpIcon class="rotate-180" />
        </template>
        <template #collapseicon>
          <ChevronUpIcon />
        </template>
        <PAccordionPanel value="0" class="shadow-none">
          <PAccordionHeader class="justify-start gap-4">
            <span class="text-base font-semibold"
              >{{ children.length }} ответ</span
            >
          </PAccordionHeader>
          <PAccordionContent>
            <div class="flex flex-col gap-4">
              <CommentItem v-for="comment in children" v-bind="comment" />
            </div>
          </PAccordionContent>
        </PAccordionPanel>
      </PAccordion>
    </div>
    <CommentItemActions
      v-show="showDotsMenuButton || isMenuVisible"
      class="comment-item__actions absolute right-0 top-0"
      @toggle="onToggle"
    />
  </div>
</template>

<script setup lang="ts">
import type { ICommentItem } from "~/types/ui.types";
import ChevronUpIcon from "../icons/chevron-up.vue";
import type { AccordionDesignTokens } from "@primeuix/themes/types/accordion";

const props = defineProps<ICommentItem>();

const mentionUser = () => {};

const showDotsMenuButton = ref(false);
const isMenuVisible = ref(false);

const onToggle = (v: boolean) => {
  console.log("onToggle", v);
  isMenuVisible.value = v;
};

const dt: AccordionDesignTokens = {
  colorScheme: {
    light: {
      panel: {
        borderColor: "transparent",
      },
      content: {
        padding: "0",
        borderWidth: "0",
        borderColor: "#FFFFFF",
      },
    },
  },
  header: {
    // activeHoverBackground: "#FFFFFF",
    // activeBackground: "#FFFFFF",
    hoverBackground: "#FFFFFF",
    padding: "0 0 16px 0",
    borderWidth: "0",
  },
};
</script>

<style scoped>
/* .comment-item__actions {
  visibility: hidden;
}

.comment-item:hover .comment-item__actions {
  visibility: visible;
} */
</style>

