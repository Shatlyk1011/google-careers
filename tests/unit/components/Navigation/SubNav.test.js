import { mount } from '@vue/test-utils';

import SubNav from '@/components/Navigation/SubNav';

describe('Subnav', () => {
  describe('when the user is on job page', () => {
    it('displays job count', () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            ionIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe('when the user is not on job page', () => {
    it('Does not display count', () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
