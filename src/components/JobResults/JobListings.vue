<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page: {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent } from 'vue';

import { useFilterJobs, useFetchJobsDispatch } from '@/store/composables';
import useCurrentPage from '@/composables/UseCurrentPage';
import usePreviousAndNextPages from '@/router/UsePreviousAndNextPages';

import JobListing from '@/components/JobResults/JobListing.vue';
export default defineComponent({
  name: 'JobListings',
  components: {
    JobListing,
  },
  setup() {
    onMounted(useFetchJobsDispatch);

    const filteredJobs = useFilterJobs();

    const currentPage = useCurrentPage();

    const maxPage = Math.ceil(filteredJobs.value.length / 10);

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );
    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    return { currentPage, displayedJobs, previousPage, nextPage };
  },
});
</script>
