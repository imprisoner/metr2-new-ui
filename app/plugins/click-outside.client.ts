import { clickOutside } from '~/directives/on-click-outside';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', clickOutside);
});