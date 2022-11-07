import { computed } from 'vue';
import { useStore } from 'vuex';

import {
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  UNIQUE_DEGREES,
  FETCH_JOBS,
  FETCH_DEGREES,
} from '@/store/constants';

import { Job } from '@/api/types';

// <!--=============== GETTERS ===============-->

export const useFilterJobs = () => {
  const store = useStore();
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore();
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useUniqueDegrees = () => {
  const store = useStore();
  return computed<string[]>(() => store.getters[UNIQUE_DEGREES]);
};

// <!--=============== ACTIONS ===============-->
export const useFetchJobsDispatch = () => {
  const store = useStore();
  store.dispatch(FETCH_JOBS);
};
export const useFetchDegreesDispatch = () => {
  const store = useStore();
  store.dispatch(FETCH_DEGREES);
};
