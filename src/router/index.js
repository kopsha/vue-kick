import { createRouter, createWebHistory } from "vue-router"
import PageOne from "../pages/one.vue"
import PageTwo from "../pages/two.vue"
import PageThree from "../pages/three.vue"
import { ref } from "vue"

const routes = [
    { path: "/", name: "PageOne", component: PageOne },
    { path: "/page-two", name: "PageTwo", component: PageTwo },
    { path: "/page-three", name: "PageThree", component: PageThree },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const isLoading = ref(true)
let startTime

router.beforeEach((to, from, next) => {
    isLoading.value = true
    startTime = Date.now()
    next()
})

router.afterEach(() => {
    const elapsed = Date.now() - startTime
    const minimumTime = 1000
    const remainingTime = minimumTime - elapsed

    if (remainingTime > 0) {
        setTimeout(() => {
            isLoading.value = false
        }, remainingTime)
    } else {
        isLoading.value = false
    }
})

export default router
