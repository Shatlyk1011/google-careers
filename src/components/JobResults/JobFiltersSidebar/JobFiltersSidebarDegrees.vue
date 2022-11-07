<template>
  <job-filters-sidebar-checkbox-group
    :uniqueValues="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
  />
</template>

<script type="ts">
import { defineComponent } from 'vue';

import { ADD_SELECTED_DEGREES } from '@/store/constants';
import { useUniqueDegrees } from '@/store/composables';

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';

export default defineComponent({
  name: 'JobFiltersSidebarDegrees',
  components: { JobFiltersSidebarCheckboxGroup },

  setup() {
    const uniqueDegrees = useUniqueDegrees();

    return { uniqueDegrees, ADD_SELECTED_DEGREES };
  },
});
</script>
