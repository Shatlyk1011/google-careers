<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue';
import axios from 'axios';

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: 'Spotlight',

  setup() {
    const spotlights = ref<Spotlight[]>([]);

    const getSpotlights = async () => {
      const url = `http://localhost:3000/spotlights`;
      const response = await axios.get<Spotlight[]>(url);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights);

    return { spotlights };
  },
});
</script>
