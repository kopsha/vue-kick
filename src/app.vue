<template>
    <nav>
        <router-link to="/">Page One</router-link> |
        <router-link to="/page-two">Page Two</router-link> |
        <router-link to="/page-three">Page Three</router-link>
    </nav>
    <main>
        <router-view />
    </main>
    <footer>
        <p>app version: {{ version }}</p>
    </footer>
</template>

<script setup>
import { getCurrentInstance, onMounted } from "vue"
const version = getCurrentInstance().appContext.config.globalProperties.$version
onMounted(() => {
    console.log("App was mounted")
})
</script>

<style>
nav {
    display: flex;
    height: 1.618em;
    gap: 1rem;
    padding: 1rem;
    background-color: #2C403E;
    color: #F2F2F2;
}

nav a {
    text-decoration: none;
    color: #F2F2F2;
}

nav a:hover {
    text-decoration: underline;
    color: #fff;
}

nav a.router-link-active {
    font-weight: bold;
}

main {
    padding: 0.8rem;
    margin: 0;
    background-color: #F2F2F2;
    color: #0D0D0D;
}

footer {
    display: flex;
    /* height: 1.618em; */
    gap: 1rem;
    padding: 0.8rem;
    background-color: #2C403E;
    color: #8FBFBF;
}
</style>
