<template>
  <Accordion header="Organizations">
    <div class="mt">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            class="w-1/2 h-8"
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
          >
            <input
              class="mr-3"
              type="checkbox"
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import {
  UNIQUE_ORGANIZATIONS,
  ADD_SELECTED_ORGANIZATIONS,
} from '@/store/constatnts';

import Accordion from '@/components/Shared/Accordion.vue';

export default {
  name: 'JobFiltersSidebarOrganizations',
  components: {
    Accordion,
  },

  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
    /*     UNIQUE_ORGANIZATIONS() {
      return this.$store.getters.UNIQUE_ORGANIZATIONS;
    }, */
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
    },
  },
};
</script>

<style>
</style>