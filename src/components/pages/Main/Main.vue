<template>
  <div>
    <div class="input-button-add">
      <Button class="button" :onChange="() => $store.dispatch('addListItem')" text="Добавить" />
      <Input
        class="input"
        :msg="$store.state.input"
        :onChange="(value) => $store.dispatch('changeInput', value)"
      />
      <Button class="button-setting" :onChange="() => $store.dispatch('toggleEditList')" text="⚙" />
    </div>
    <div class="list">
      <List />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import List from '@components/common/List';

export default defineComponent({
  name: 'Main',
  components: {
    Input,
    Button,
    List,
  },
});
</script>

<style scoped>
  .list {
    display: flex;
    max-width: 1200px;
    margin: 12px auto 0;
  }

  .button {
    width: 120px;
  }

  .button-setting {
    margin-left: 12px;
  }

  .input {
    margin-left: 12px;
  }

  .input-button-add {
    display: flex;
    justify-content: center;
  }
</style>
