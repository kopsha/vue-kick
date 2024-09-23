import { createApp } from "vue"
import "./style.css"
import App from "./app.vue"
import router from "./router"
import { version } from "../package.json"

const app = createApp(App)
app.config.globalProperties.$version = version
app.use(router).mount("#app")
console.log("app should be mounted?")
