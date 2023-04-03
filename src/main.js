import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import './registerServiceWorker.js';
import router from './router';
import './assets/styles.css';

import VueVideoPlayer from '@videojs-player/vue';
import 'video.js/dist/video-js.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(VueVideoPlayer);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);


app.mount('#__app');
