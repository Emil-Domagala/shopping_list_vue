import { createApp } from 'vue';
import App from './App.vue';
import fontAwesome from './fontAwesome.js';

const app = createApp(App);

app.use(fontAwesome);


app.mount('#app');
