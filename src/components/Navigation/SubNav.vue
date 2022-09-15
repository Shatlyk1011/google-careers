<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div data-test="job-count">
        <ion-icon name="search-outline" class="mr-3 text-base"></ion-icon>
        <span class="text-base">
          <span class="text-brand-green-1">1653</span> jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubNav',
  data() {
    return {
      obJobResultPage: false,
    };
  },
};
</script>

<style>
</style>