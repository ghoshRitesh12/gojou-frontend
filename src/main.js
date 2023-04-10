import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './registerServiceWorker.js';
import router from './router';
import './assets/styles.css';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css'

import App from './App.vue';


const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(VuePlyr)

pinia.use(piniaPluginPersistedstate);
app.use(pinia);


app.mount('#__app');
