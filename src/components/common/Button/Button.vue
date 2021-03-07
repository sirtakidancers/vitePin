<template>
  <button @click="onChange" :alt="text">
    {{text}}
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Button',
    props: {
      text: {
        type: String,
        required: true
      },
      onChange: {
        type: Function,
        required: true
      }
    }
  });
</script>

<style scoped>
  button {
    cursor: pointer;
    border: 1px solid darkgray;
    color: black;
    font-size: 14px;
    padding: 8px 12px;
    background: white;
    border-radius: 4px;
  }
</style>