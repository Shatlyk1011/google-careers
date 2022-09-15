<template>
  <div>
    <h1 class="text-6xl">Job Results View</h1>
    <button @click="redirect">Go to Home Page</button>
  </div>
</template>

<script>
export default {
  name: 'JobResults',
  computed: {
    experiments() {
      console.log(this.$router);
      return 'Irrelevant';
    },
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style>
</style>