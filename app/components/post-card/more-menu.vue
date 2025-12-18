<template>
  <PButton text @click="toggle">
    <template #icon>
      <DotsIcon />
    </template>
  </PButton>
  <ClientOnly>
    <div
      class="flex flex-col py-2 absolute top-12 right-0 w-60 bg-white rounded-lg custom-popover"
      v-if="!isHidden"
    >
      <div class="lg:hidden">
        <PButton
          class="justify-start w-full rounded-none"
          text
          label="Подписаться"
        />
        <hr class="w-full text-custom-divider" />
      </div>
      <PButton
        v-for="item in popoverItems"
        :key="item.label"
        :label="item.label"
        severity="secondary"
        text
        class="justify-start w-full rounded-none"
      >
        <template #icon>
          <span class="h-5 w-5 me-2">
            <Component :is="item.icon" class="w-full h-full" />
          </span>
        </template>
      </PButton>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import DotsIcon from "~/components/icons/dots.vue";
import SlashedEyeIcon from "~/components/icons/slashed-eye.vue";
import FlagIcon from "~/components/icons/flag.vue";
import ShareIcon from "~/components/icons/share.vue";

const isHidden = ref(true);

const toggle = () => {
  isHidden.value = !isHidden.value;
};

const popoverItems = [
  { label: "Скрыть из моей ленты", icon: SlashedEyeIcon },
  { label: "Пожаловаться", icon: FlagIcon },
  { label: "Поделиться", icon: ShareIcon },
];
</script>

<style scoped>
.custom-popover {
  box-shadow: 0px 2px 12px 0px #0000001a;
}
</style>

