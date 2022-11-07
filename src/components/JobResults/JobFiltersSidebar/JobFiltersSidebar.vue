<template>
  <div
    class="
      flex flex-col
      p-4
      bg-white
      border-r border-solid border-brand-gray-1
      w-96
    "
  >
    <section class="pd-5">
      <JobFiltersSidebarPrompt />

      <Accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </Accordion>

      <Accordion header="Job types">
        <job-filters-sidebar-job-types />
      </Accordion>

      <Accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </Accordion>
    </section>
  </div>
</template>

<script type="ts">
import { defineComponent } from 'vue';

import Accordion from '@/components/Shared/Accordion.vue';
import JobFiltersSidebarPrompt from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue';
import JobFiltersSidebarDegrees from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue';
import JobFiltersSidebarJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue';
import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
export default defineComponent({
  name: 'JobFiltersSidebar',
  components: {
    Accordion,
    JobFiltersSidebarPrompt,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
  },
});
</script>
