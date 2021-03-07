import { createApp } from 'vue';

import { ListStore, ListStoreKey } from '@components/common/List/store';
import { store, key } from './store';
import App from './App.vue';

const app = createApp(App);

app.use(store, key);
app.use(ListStore, ListStoreKey);

app.mount('#app');
