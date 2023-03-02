import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import './registerServiceWorker.js';
import router from './router';
import './assets/styles.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);


app.mount('#__app');
