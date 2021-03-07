<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from '@components/pages/Main'

export default defineComponent({
  name: 'App',
  components: {
    Main
  }
})
</script>

<style>
  * {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
  }

  #app {
    text-align: center;
    margin-top: 60px;
  }
</style>