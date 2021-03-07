import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export type ItemList = {
  text: string;
  id: number;
  date: Date;
  isDelete?: boolean;
}

export interface State {
  list: Record<number, ItemList>;
  input: string;
  id: number;
  changeItem: ItemList | null;
  isEditMode: boolean;
}

export const ListStoreKey: InjectionKey<Store<State>> = Symbol();

export const ListStore = createStore<State>({
  state: {
    id: 0,
    list: {},
    input: '',
    changeItem: null,
    isEditMode: false,
  },
  mutations: {
    changeInput(state, value) {
      state.input = value;
    },
    addListItem(state) {
      if (!state.input) return;

      state.list[state.id] = {
        text: state.input,
        id: state.id,
        date: new Date(),
      };
      state.id += 1;
    },
    removeItem(state, id: number) {
      state.list[id] = {
        ...state.list[id],
        isDelete: true
      };
    },
    startChangeItem(state, id: number) {
      state.changeItem = { ...state.list[id] };
    },
    stopChangeItem(state, isSave: boolean) {
      if (isSave && state.changeItem) {
        state.list[state.changeItem.id] = {
          ...state.list[state.changeItem.id],
          text: state.changeItem.text
        };
      }

      state.changeItem = null;
    },
    changeItemInput(state, value: string) {
      if (state.changeItem) state.changeItem.text = value;
    },
    toggleEditList(state) {
      state.isEditMode = !state.isEditMode;
    },
  },
  getters: {
    notDeleteList(state) {
      return Object.values(state.list).filter((item) => !item.isDelete);
    }
  },
  actions: {
    addListItem({ dispatch, commit }): void {
      commit('addListItem');
      dispatch('changeInput', '');
    },
    changeInput({ commit }, value: string): void {
      commit('changeInput', value);
    },
    removeItem({ commit }, id: number): void {
      commit('removeItem', id);
    },
    startChangeItem({ commit }, item: ItemList): void {
      commit('startChangeItem', item);
    },
    saveChangeItem({ commit }): void {
      commit('stopChangeItem', true);
    },
    cancelChangeItem({ commit }): void {
      commit('stopChangeItem');
    },
    changeItemInput({ commit }, value: string): void {
      commit('changeItemInput', value);
    },
    toggleEditList({ commit }, value: string): void {
      commit('toggleEditList', value);
    },
  }
});
