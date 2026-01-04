<template>
  <div class="flex-1 transition-all duration-300">
    <!-- 
          Standard Textarea 
          We use absolute positioning or a simple v-if swap. 
          Here, v-if swap is cleanest with mode="out-in" 
        -->
    <Transition
      name="expand"
      mode="out-in"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
    >
      <!-- State 1: Simple Textarea -->
      <div v-if="!showFullEditor" key="textarea" class="w-full">
        <PTextarea
          size="small"
          placeholder="Поделитесь мнением"
          class="h-14 w-full resize-none transition-shadow"
          @focus="enableEditor"
        />
      </div>

      <!-- State 2: Full WYSIWYG Editor -->
      <div
        v-else
        key="editor"
        class="w-full overflow-hidden flex flex-col gap-2"
      >
        <!-- 
               Wrapper div is crucial for the height animation to work 
               on the container rather than the component itself 
             -->
        <UiWysiwygEditor
          ref="editorRef"
          v-model:content="content"
          class="h-auto"
        />

        <!-- Optional: Cancel/Save buttons can go here -->
        <div class="flex fade-in">
          <PButton label="Отправить" />
          <!-- Add your submit button here -->
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import WysiwygEditor from "../ui/wysiwyg-editor/wysiwyg-editor.vue";

const { size } = defineProps<{
  size: "sm" | "lg";
}>();

// const heightClass = size === "sm" ? "h-11" : "h-27";

const content = ref("");
const showFullEditor = ref(false);
const editorRef = ref<typeof WysiwygEditor>();

const enableEditor = async () => {
  showFullEditor.value = true;

  // Wait for DOM update then focus the editor
  // Note: Your UiWysiwygEditor must expose a focus() method or inner element
  await nextTick();
  if (editorRef.value?.focus) {
    editorRef.value.focus();
  }
};

// 2. Animation Hooks (The "Unfolding" Magic)
const onEnter = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = "0";
  element.style.overflow = "hidden"; // Prevent scrollbars during animation

  // Force reflow to ensure browser registers 0 height
  void element.offsetHeight;

  // Set to scrollHeight (the actual height of content)
  element.style.height = element.scrollHeight + "px";
};

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = "auto"; // Reset to auto after animation finishes
  element.style.overflow = "";
};

const onLeave = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = element.offsetHeight + "px";
  element.style.overflow = "hidden";

  // Force reflow
  void element.offsetHeight;

  element.style.height = "0";
};
</script>

<style scoped>
/* 
  CSS Transition Classes 
  Controlled by the Vue <Transition> component
*/
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), opacity 0.2s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
}

/* Optional: Smooth fade in for the buttons footer */
.fade-in {
  animation: fadeIn 0.4s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

