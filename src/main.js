import "./assets/styles/main.scss";
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from "vue-i18n";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import UZ from "./locales/uz.json";
import RU from "./locales/ru.json";

export const i18n = createI18n({
    legacy: false, // Отключите legacy mode
    locale: localStorage.getItem('lang') || 'UZ', // Исправлено localStorage.getItem('lang')
    messages: {
        UZ: UZ,
        RU: RU
    }
});

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount('#app');
