<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <ion-icon name="search-outline" class="mr-3 text-base"></ion-icon>
        <span class="text-base">
          <span class="text-brand-green-1">{{
            this.FILTERED_JOBS.length
          }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useFilterJobs } from '@/store/composables';

import useConfirmRoute from '@/composables/UseConfirmRoute';
export default {
  name: 'SubNav',

  setup() {
    const FILTERED_JOBS = useFilterJobs;
    // const store = useStore();
    // const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

    const onJobResultsPage = useConfirmRoute('JobResults');

    return { onJobResultsPage, FILTERED_JOBS };
  },
};
</script>

<style>
</style>