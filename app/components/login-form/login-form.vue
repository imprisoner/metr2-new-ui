<template>
  <PCard pt:content:class="flex flex-col gap-2" pt:root:class="p-5" pt:body:class="p-0">
    <template #title> Войти </template>
    <template #content>
      <form class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <PInputGroup>
            <PInputGroupAddon>
              <EnvelopeIcon />
            </PInputGroupAddon>
            <PInputText placeholder="E-mail" />
          </PInputGroup>
          <PInputGroup>
            <PInputGroupAddon>
              <KeyIcon />
            </PInputGroupAddon>
            <PPassword placeholder="Пароль" />
          </PInputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <PButton type="submit" label="Войти" severity="accent"/>
          <PButton outlined severity="secondary" label="Создать аккаунт" />
          <PButton text label="Забыли пароль?" severity="secondary" />
        </div>
      </form>
      <div class="special">
        <hr class="text-custom-divider" />
        <span class="text-nowrap text-custom-secondary font-bold text-sm">
          или продолжить с
        </span>
        <hr class="text-custom-divider" />
      </div>
      <div class="flex gap-2 justify-center">
        <PButton outlined rounded severity="secondary">
          <template #icon>
            <GoogleIcon />
          </template>
        </PButton>
        <PButton outlined rounded severity="secondary">
          <template #icon>
            <YandexIcon />
          </template>
        </PButton>
        <PButton outlined rounded severity="secondary">
          <template #icon>
            <VkIcon />
          </template>
        </PButton>
      </div>
    </template>
  </PCard>
</template>

<script setup lang="ts">
import EnvelopeIcon from "~/components/icons/envelope.vue";
import KeyIcon from "~/components/icons/key.vue";
import GoogleIcon from "~/components/icons/google.vue";
import YandexIcon from "~/components/icons/yandex.vue";
import VkIcon from "~/components/icons/vkontakte.vue";
</script>

<style scoped>
.special {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
  justify-items: center;
}

.special hr {
  width: 100%;
}
</style>

