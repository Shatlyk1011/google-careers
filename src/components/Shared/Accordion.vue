<template>
  <div class="py-5 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <ion-icon :name="caretIcon"></ion-icon>
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot
        ><p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          accusantium ducimus optio!
        </p></slot
      >
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'Accordion',
  props: {
    header: {
      type: String,
      require: true,
    },
  },
  setup() {
    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };
    const caretIcon = computed(() => {
      return isOpen.value ? 'chevron-up-outline' : 'chevron-down-outline';
    });

    return { open, isOpen, caretIcon };
  },
};
</script>

<style>
</style>