// main.scss code
import "./assets/styles/main.scss"
// main.scss code
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {createI18n} from "vue-i18n"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import uz from "./locales/uz.json"
import ru from "./locales/ru.json"

const i18n = createI18n({
    locale: 'uz',
    fallbackLocal: 'uz',
    massages: {
        uz,
        ru
    }
})

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)
pinia.use(piniaPluginPersistedstate);

app.mount('#app')