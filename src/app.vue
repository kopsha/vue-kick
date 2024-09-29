<script setup>
import { getCurrentInstance, onMounted, ref, watch } from "vue"
import { storeToRefs } from "pinia"
import { useSampleStore } from "@/stores/sample"

const version = getCurrentInstance().appContext.config.globalProperties.$version
const loadingAnimation = ref("1s spin linear infinite")
const check = useSampleStore()

onMounted(() => {
    loadingAnimation.value = "none"
})

watch(
    () => check.isLoading,
    () => {
        console.log(check.isLoading)
        if (check.isLoading) {
            loadingAnimation.value = "1s spin linear infinite"
            console.log(loadingAnimation.value)
        } else {
            loadingAnimation.value = "none"
            console.log(loadingAnimation.value)
        }
    },
)
</script>

<template>
    <header class="hbar">
        <div>
            <div id="loader"></div>
        </div>
        <div class="spacer"></div>
        <nav>
            <router-link to="/">Page One</router-link> |
            <router-link to="/page-two">Page Two</router-link> |
            <router-link to="/page-three">Page Three</router-link>
        </nav>
    </header>
    <main class="content">
        <router-view />
    </main>
    <footer class="hbar">
        <p>app version: {{ version }}</p>
    </footer>
</template>

<style>
#loader {
    --loader-animation: v-bind(loadingAnimation);
}
</style>
