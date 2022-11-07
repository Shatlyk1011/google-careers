<template>
  <job-filters-sidebar-checkbox-group
    :uniqueValues="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script type="ts">
import { defineComponent } from 'vue';

import { ADD_SELECTED_ORGANIZATIONS } from '@/store/constants';
import { useUniqueOrganizations } from '@/store/composables';

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';

export default defineComponent({
  name: 'JobFiltersSidebarOrganizations',
  components: { JobFiltersSidebarCheckboxGroup },

  setup() {
    const uniqueOrganizations = useUniqueOrganizations();

    return { uniqueOrganizations, ADD_SELECTED_ORGANIZATIONS };
  },
});
</script>
