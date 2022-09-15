<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    modelValue: {
      type: String,
      required: true,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style>
</style>