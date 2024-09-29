/**
 * An async API Client that handles all errors and returns a uniform response.
 */
class ApiClient {
    constructor(apiRoot) {
        this.apiRoot = apiRoot.replace(/\/+$/, "")
    }

    async get({ resource, params = null }) {
        return this.#request("GET", resource, { params, data: null })
    }

    async post({ resource, data = null, params = null }) {
        return this.#request("POST", resource, { data, params })
    }

    async put({ resource, data = null, params = null }) {
        return this.#request("PUT", resource, { data, params })
    }

    async patch({ resource, data = null, params = null }) {
        return this.#request("PATCH", resource, { data, params })
    }

    async delete({ resource, data = null, params = null }) {
        return this.#request("DELETE", resource, { data, params })
    }

    async head({ resource, data = null, params = null }) {
        return this.#request("HEAD", resource, { data, params })
    }

    async #request(method, resource, { params, data }) {
        const result = {
            data: null,
            errors: [],
        }

        // Retrieve the JWT from localStorage for each request
        const jwt = localStorage.getItem("JWT")
        const authHeader = jwt ? `Bearer ${jwt}` : ""

        // Construct the full URL with optional query parameters
        let url = `${this.apiRoot}/${resource}`
        if (params) {
            const queryParams = new URLSearchParams(params).toString()
            url += `?${queryParams}`
        }

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authHeader,
                },
                body: ["GET", "HEAD"].includes(method)
                    ? null
                    : JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            // Parse the JSON response
            result.data = await response.json()
        } catch (error) {
            result.errors.push(error.message)
        }

        return result
    }
}

export const apiClient = new ApiClient(import.meta.env.VITE_BASEURL)
