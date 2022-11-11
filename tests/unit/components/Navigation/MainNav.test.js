import { mount } from '@vue/test-utils';
import MainNav from '@/components/Navigation/MainNav';

describe('MainNav', () => {
  it('displays company name', async () => {
    const wrapper = mount(MainNav);
    await wrapper.setData({
      company: 'Super Corp',
    });
    expect(wrapper.text()).toMatch('Super Corp');
  });
  it('displays menu items for navigation', () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='name-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map(item => item.text());
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Google',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
  describe('when user is logged out', () => {
    it('prompts user to sign in', () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.findComponent({ name: 'ActionButton' });
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe('when user logs in', () => {
    it('displays user profile picture', async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.findComponent("[data-test='login-button']");
      await loginButton.trigger('click');

      profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
