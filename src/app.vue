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

<script setup>
import { getCurrentInstance, onMounted } from "vue"
const version = getCurrentInstance().appContext.config.globalProperties.$version
onMounted(() => {
    console.log("App was mounted")
    const loader = document.getElementById("loader")
    if (loader) {
        loader.style.setProperty('--loader-animation', 'none');
    }
})
</script>
