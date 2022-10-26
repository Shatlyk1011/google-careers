<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
export default {
  name: 'Spotlight',

  setup() {
    const spotlights = ref([]);

    const getSpotlights = async () => {
      const url = `http://localhost:3000/spotlights`;
      const response = await axios.get(url);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights);

    return { spotlights };
  },
};
</script>
