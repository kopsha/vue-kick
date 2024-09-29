<script setup>
import { useSampleStore } from "@/stores/sample"
const check = useSampleStore()
</script>

<template>
    <div>
        <h1>Page One</h1>
        <p>This is the first dummy page.</p>
        <div class="card">
            <button type="button" @click="check.get">push me</button>
            <p>
                {{ check.loading }}<br />
                {{ check.data }}<br />
                {{ check.errors }}<br />
            </p>
        </div>
    </div>
</template>
