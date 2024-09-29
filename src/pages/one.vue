<script setup>
import { onMounted } from "vue"
import { useSampleStore } from "@/stores/sample"
const check = useSampleStore()

onMounted(() => {
    check.getUsers()
})
</script>

<template>
    <div>
        <h1>A bunch of dumbasses</h1>
        <div v-if="check.error">
            <p>Error: {{ error.message }}</p>
        </div>
        <div v-else-if="check.users">
            <ul>
                <li v-for="user in check.users" :key="user.id">
                    <h2>{{ user.last_name }}, {{ user.first_name }}</h2>
                    <p>email: {{ user.email }}</p>
                    <img
                        :src="user.avatar"
                        alt="Avatar"
                        style="width: 55px; height: auto"
                    />
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No companies to display.</p>
        </div>
    </div>
</template>

<style>
ul {
    list-style: none;
    padding-left: 1rem;
}

li {
    margin-bottom: 21px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 13px;
}
</style>
