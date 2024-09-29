import { defineStore } from "pinia"
import { apiClient } from "@/api/client"

export const useSampleStore = defineStore("sampleOne", {
    state: () => ({
        loading: false,
        data: {},
        errors: [],
    }),
    actions: {
        async get() {
            this.loading = true
            this.errors = []

            const result = await apiClient.get({ resource: "public/v2/lusers" })
            console.log("api call result is", result)

            this.loading = false
            this.data = result.data
            this.errors = result.errors
        },
    },
})
