<template>
  <div class="w-full borber-b border-solid border-brand-gray-3">
    <div class="mx-auto my-16 text-center">
      <slot name="title">Sample title</slot>
      <slot name="subtitle">Sample subtitle</slot>
    </div>
  </div>
</template> 

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HeaderContainer',
});
</script>

<style>
</style> 