import { createApp } from 'vue';
import store from './store/index.js';
import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const app = createApp(App);

app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);


app.mount('#app');
