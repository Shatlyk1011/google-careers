import { Commit } from 'vuex';

import getJobs from '@/api/getJobs';

import { FETCH_JOBS, RECIEVE_JOBS } from '@/store/constants';

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECIEVE_JOBS, jobListings);
  },
};

export default actions;
