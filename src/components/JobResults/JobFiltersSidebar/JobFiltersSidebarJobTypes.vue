<template>
  <Accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            class="w-1/2 h-8"
            v-for="jobType in UNIQUE_JOB_TYPES"
            :key="jobType"
          >
            <input
              class="mr-3"
              type="checkbox"
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import { UNIQUE_JOB_TYPES, ADD_SELECTED_JOB_TYPES } from '@/store/constatnts';

import Accordion from '@/components/Shared/Accordion.vue';

export default {
  name: 'JobFiltersSidebarJobTypes',
  components: {
    Accordion,
  },

  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
    /*     UNIQUE_ORGANIZATIONS() {
      return this.$store.getters.UNIQUE_ORGANIZATIONS;
    }, */
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: 'JobResults' });
    },
  },
};
</script>

<style>
</style>