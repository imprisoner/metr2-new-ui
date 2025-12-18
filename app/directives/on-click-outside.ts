import type { ObjectDirective, DirectiveBinding } from 'vue';

type ClickOutsideEl = HTMLElement & {
  __clickOutsideHandler__?: (event: MouseEvent | TouchEvent) => void;
};

export const clickOutside: ObjectDirective<
  ClickOutsideEl,
  (e: Event) => void
> = {
  mounted(el, binding: DirectiveBinding) {
    const handler = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;

      if (target && !el.contains(target)) {
        binding.value(event);
      }
    };

    el.__clickOutsideHandler__ = handler;

    document.addEventListener('click', handler);
    document.addEventListener('touchstart', handler);
  },

  unmounted(el) {
    const handler = el.__clickOutsideHandler__;
    if (!handler) return;

    document.removeEventListener('click', handler);
    document.removeEventListener('touchstart', handler);
    delete el.__clickOutsideHandler__;
  },
};