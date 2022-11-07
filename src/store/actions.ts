import { Commit } from 'vuex';

import getJobs from '@/api/getJobs';
import getDegrees from '@/api/getDegree';

import {
  FETCH_JOBS,
  RECIEVE_JOBS,
  FETCH_DEGREES,
  RECIEVE_DEGREES,
} from '@/store/constants';

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECIEVE_JOBS, jobListings);
  },
  [FETCH_DEGREES]: async (context: Context) => {
    const degrees = await getDegrees();
    context.commit(RECIEVE_DEGREES, degrees);
  },
};

export default actions;
