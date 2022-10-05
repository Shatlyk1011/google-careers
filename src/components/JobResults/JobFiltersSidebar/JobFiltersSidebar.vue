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
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you wnat to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear filters" type="secondary" />
        </div>
      </div>
      <Accordion header="Degree" />

      <Accordion header="Job types">
        <p>Lorem ipsum dolor sit amet.</p>
      </Accordion>
      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue';
import Accordion from '@/components/Shared/Accordion.vue';
import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    Accordion,
    JobFiltersSidebarOrganizations,
  },
};
</script>

<style>
</style>