<template>
  <ul>
    <li class="item" v-for="item in $store.getters.notDeleteList" :key="item.id">
      <span class="item-text" v-if="$store.state.changeItem?.id !== item.id">{{item.text}}</span>
      <Input
        v-if="$store.state.changeItem?.id === item.id"
        :msg="$store.state.changeItem.text"
        :onChange="(value) => $store.dispatch('changeItemInput', value)"
      />
      <div v-if="$store.state.isEditMode">
        <span
          v-if="$store.state.changeItem?.id === item.id"
          class="item-action item-action_remove"
          @click="$store.dispatch('cancelChangeItem', item.id)"
        >отменить</span>
        <span
          v-if="$store.state.changeItem?.id === item.id"
          class="item-action item-action_change"
          @click="$store.dispatch('saveChangeItem', item.id)"
        >сохранить</span>
        <span
          v-if="$store.state.changeItem === null"
          class="item-action item-action_remove"
          @click="$store.dispatch('removeItem', item.id)"
        >удалить</span>
        <span
          v-if="$store.state.changeItem === null"
          class="item-action item-action_change"
          @click="$store.dispatch('startChangeItem', item.id)"
        >изменить</span>
      </div>
      <span v-if="!$store.state.isEditMode">{{item.date.toLocaleString('ru')}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@components/common/Input';

export default defineComponent({
  name: 'List',
  components: {
    Input,
  },
});
</script>

<style scoped>
  ul, .item {
    padding: 0;
    margin: 0;
    list-style:none;
    width: 100%;
  }

  .item-text {
    margin-left: 13px;
  }

  .item {
    height: 34px;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item-action {
    margin-left: 12px;
    cursor: pointer;
  }

  .item-action_change {
    color: green;
  }

  .item-action_remove {
    color: red;
  }
</style>
