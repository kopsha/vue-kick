<template>
    <div id="app">
        <Loader :isLoading="loading" />
        <nav v-if="!loading">
            <router-link to="/">Page One</router-link> |
            <router-link to="/page-two">Page Two</router-link> |
            <router-link to="/page-three">Page Three</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Loader from "./components/loader.vue"
const loading = ref(true)
const data = ref(null)

onMounted(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    data.value = "Here is some loaded data!"
    loading.value = false
})
</script>

<style>
nav {
    padding: 10px;
}
nav a {
    margin: 0 5px;
    text-decoration: none;
    color: #42b983;
}
nav a.router-link-active {
    font-weight: bold;
}
</style>
