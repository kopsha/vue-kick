import { createApp } from "vue"
import { createPinia } from "pinia"
import "./style.css"
import App from "./app.vue"
import router from "./router"
import { version } from "../package.json"

const app = createApp(App)
app.config.globalProperties.$version = version
const pinia = createPinia()

app.use(pinia)
app.use(router).mount("#app")
