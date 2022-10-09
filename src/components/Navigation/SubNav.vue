<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <ion-icon name="search-outline" class="mr-3 text-base"></ion-icon>
        <span class="text-base">
          <span class="text-brand-green-1">{{
            this.FILTERED_JOBS_BY_ORGANIZATIONS.length
          }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { FILTERED_JOBS_BY_ORGANIZATIONS } from '@/store/constatnts';
export default {
  name: 'SubNav',
  computed: {
    ...mapGetters([FILTERED_JOBS_BY_ORGANIZATIONS]),
    onJobResultsPage() {
      return this.$route.name === 'JobResults';
    },
  },
};
</script>

<style>
</style>