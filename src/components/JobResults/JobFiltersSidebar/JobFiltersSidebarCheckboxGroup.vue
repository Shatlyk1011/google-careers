<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li class="w-1/2 h-8" v-for="value in uniqueValues" :key="value">
          <input
            class="mr-3"
            type="checkbox"
            :id="value"
            v-model="selectedValues"
            :value="value"
            @change="selectValue"
          />
          <label :for="value">{{ value }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script type="ts">
import { ref, defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { CLEAR_USER_FILTER_SELECTIONS } from '@/store/constants';

export default defineComponent({
  name: 'JobFiltersSidebarCheckboxGroup',
  props: {
    uniqueValues: {
      // type: [Array, Set] as PropType<string[] | Set<string>>,
      type: [Array, Set],
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();

    const selectedValues = ref([]);

    store.subscribe(mutation => {
      if (mutation.type === CLEAR_USER_FILTER_SELECTIONS) {
        selectedValues.value =
          []; /* если запускается clear_user_filter_selections то очисти selectedValues.value */
      }
    });

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: 'JobResults' });
    };

    return {
      selectedValues,
      selectValue,
    };
  },
});
</script>