<template>
  <job-filters-sidebar-checkbox-group
    :uniqueValues="uniqueJobTypes"
    :mutation="ADD_SELECTED_JOB_TYPES"
  />
</template>

<script type="ts">
import { defineComponent } from 'vue';

import { useUniqueJobTypes } from '@/store/composables';
import { ADD_SELECTED_JOB_TYPES } from '@/store/constants';

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';

export default defineComponent({
  name: 'JobFiltersSidebarJobTypes',
  components: {
    JobFiltersSidebarCheckboxGroup,
  },

  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return { uniqueJobTypes, ADD_SELECTED_JOB_TYPES };
  },
});
</script>
