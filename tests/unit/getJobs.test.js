import axios from 'axios';
jest.mock.apply('axios');

import getJobs from '@/api/getJobs';

describe('getJobs', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue(5);
  });

  it('fetches jobs that candidates can apply to', async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/jobs');
  });

  it('extracs jobs from response', async () => {
    const data = await getJobs();
    expect(data).toEqual([
      {
        id: 1,
        title: 'JS engineer',
      },
    ]);
  });
});
