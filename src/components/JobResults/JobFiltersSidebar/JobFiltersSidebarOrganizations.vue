<template>
  <Accordion header="Organizations">
    <div class="mt">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input class="mr-3" type="checkbox" id="VueTube" />
            <label for="VueTube">VueTube?</label>
          </li>
          <li class="w-1/2 h-8">
            <input class="mr-3" type="checkbox" id="Between" />
            <label for="Between">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input class="mr-3" type="checkbox" id="Et Vue Brute" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="w-1/2 h-8">
            <input class="mr-3" type="checkbox" id="Vue half" />
            <label for="Vue half">Vue half</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from '@/components/Shared/Accordion.vue';

export default {
  name: 'JobFiltersSidebarOrganizations',
  components: {
    Accordion,
  },
};
</script>

<style>
</style>