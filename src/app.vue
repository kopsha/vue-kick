<template>
    <nav>
        <router-link to="/">Page One</router-link> |
        <router-link to="/page-two">Page Two</router-link> |
        <router-link to="/page-three">Page Three</router-link>
    </nav>
    <main>
        <progress v-if="loading" :value="Math.trunc(progress + 0.5)" max="100" />
        <router-view v-else />
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue"
const loading = ref(true)
const progress = ref(0)

const fakeLoading = async () => {
    const loadingDuration = 987
    const intervalDuration = 89
    const increment = (intervalDuration / loadingDuration) * 100
    while (progress.value < 100) {
        await new Promise((resolve) => setTimeout(resolve, intervalDuration))
        progress.value += increment
    }
    progress.value = 100
    loading.value = false
}
onMounted(async () => {
    await fakeLoading()
})
</script>

<style>
nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #f0f0f0;
    height: 1.618em;
}

nav a {
    text-decoration: none;
    color: #0366d6;
}

nav a:hover {
    text-decoration: underline;
}

nav a.router-link-active {
    font-weight: bold;
}

main {
    padding: 8px;
    margin: 0 144px;
    /* border: solid 1px red; */
}

progress {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 13px;
    background-color: #f0f0f0;
    border: none;
}

progress::-webkit-progress-bar {
    background-color: white;
    border-radius: 5px;
    border: none;
}

progress::-webkit-progress-value {
    background-color: cornflowerblue;
    transition: width 0.081s ease-in-out;
    border-radius: 5px;
}

progress::-moz-progress-bar {
    background-color: cornflowerblue;
    transition: all 0.081s ease;
    border-radius: 5px;
}
</style>
