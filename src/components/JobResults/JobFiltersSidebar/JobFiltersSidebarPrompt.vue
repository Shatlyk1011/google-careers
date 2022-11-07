<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do you wnat to do?</h3>
    <div class="flex items-center text-sm">
      <ActionButton
        text="Clear filters"
        type="secondary"
        @click="clearUserJobFilterSelections"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

import ActionButton from '@/components/Shared/ActionButton.vue';

import { CLEAR_USER_FILTER_SELECTIONS } from '@/store/constants';

export default defineComponent({
  name: 'JobFiltersSidebarPrompt',
  components: {
    ActionButton,
  },
  setup() {
    const store = useStore();
    const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_FILTER_SELECTIONS);
    };

    return {
      clearUserJobFilterSelections,
    };
  },
});
</script>
