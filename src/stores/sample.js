import { defineStore } from "pinia"
import { apiClient } from "@/api/client"

export const useSampleStore = defineStore("sampleOne", {
    state: () => ({
        isLoading: false,
        data: null,
        error: null,
    }),
    getters: {
        users: (state) => state.data,
    },
    actions: {
        async getUsers() {
            this.isLoading = true
            this.error = null

            try {
                const result = await apiClient.get({
                    resource: "users",
                    params: { delay: 3 },
                })
                this.data = result.data.data
                this.error = result.error
            } catch (error) {
                this.error = error
            } finally {
                this.isLoading = false
            }
        },
    },
})
