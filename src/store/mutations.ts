import {
  LOGIN_USER,
  RECIEVE_DEGREES,
  RECIEVE_JOBS,
  UPDATE_SKILLS_SEARCH_TERM,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_FILTER_SELECTIONS,
} from '@/store/constants';

import { GlobalState } from '@/store/types';
import { Degree, Job } from '@/api/types';

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECIEVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [RECIEVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  [UPDATE_SKILLS_SEARCH_TERM](state: GlobalState, skillsSearchTerm: string) {
    state.skillsSearchTerm = skillsSearchTerm;
  },
  [CLEAR_USER_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = '';
  },
};

export default mutations;
