<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Spotlight',
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const url = `http://localhost:3000/spotlights`;
    const response = await axios.get(url);
    this.spotlights = response.data;
    console.log(response.data);
  },
};
</script>


<style>
/*   async mounted() {

    const response = await axios.get(url);
    response.data = this.spotLights;
  }, */
</style>