<template>
  <input :value="msg" @input="(e) => onChange(e.target.value)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    msg: {
      type: String,
      required: true,
    },
    onChange: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style scoped>
input {
  border-radius: 4px;
  border: 1px solid darkgray;
  color: black;
  font-size: 14px;
  padding: 8px 12px;
  width: 240px;
  box-sizing: border-box;
}
</style>
