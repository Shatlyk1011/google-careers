<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="
          flex flex-nowrap
          h-full
          px-8
          mx-auto
          border-b border-solid border-brand-gray-1
        "
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
        >
          Google Careers
        </router-link>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="name-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
          <ActionButton
            v-else
            type="primary"
            data-test="login-button"
            text="Sign In"
            @click="LOGIN_USER"
          />
        </div>
      </div>

      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';
import { mapState } from 'vuex';
import { defineComponent } from 'vue';

import ActionButton from '@/components/Shared/ActionButton.vue';
import ProfileImage from '@/components/Shared/ProfileImage.vue';
import SubNav from '@/components/Navigation/SubNav.vue';

// import { LOGIN_USER } from '@/store/constants';
export default defineComponent({
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      menuItems: [
        { text: 'Teams', url: '/teams' },
        { text: 'Locations', url: '/' },
        { text: 'Life at Google', url: '/' },
        { text: 'How we hire', url: '/' },
        { text: 'Students', url: '/' },
        { text: 'Jobs', url: '/jobs/results' },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLoggedIn,
        'h-32': this.isLoggedIn,
      };
    },
    /*     isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }, */
    ...mapState(['isLoggedIn']),
  },
  methods: {
    ...mapMutations(['LOGIN_USER']),
  },
});
</script>

<style>
</style>  