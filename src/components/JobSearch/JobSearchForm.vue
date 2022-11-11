<template>
  <form
    class="
      flex
      items-center
      w-full
      h-12
      mt-14
      border border-solid border-brand-gray-3
      rounded-3xl
    "
    @submit.prevent="searchForJobs"
  >
    <ion-icon name="search-outline" class="ml-4 mr-3"></ion-icon>

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10 font-medium">Role</label>
        <TextInput v-model="role" placeholder="Ruby, Java" />
      </div>
      <span
        class="
          flex
          items-center
          h-full
          px-3
          border-l border-r border-brand-gray-3
          bg-brand-gray-2
        "
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10 font-medium">Where?</label>
        <TextInput v-model="location" placeholder="Los Angeles" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import ActionButton from '@/components/Shared/ActionButton.vue';
import TextInput from '@/components/Shared/TextInput.vue';
export default defineComponent({
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput,
  },

  setup() {
    const router = useRouter();

    const role = ref('');
    const location = ref('');

    const searchForJobs = () => {
      router.push({
        name: 'JobResults',
        query: { role: role.value, location: location.value },
      });
    };

    return { role, location, searchForJobs };
  },

  /*   data() {
    return {
      role: '',
      location: '',
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: 'JobResults',
        query: { role: this.role, location: this.location },
      });
    },
  }, */
});
</script>