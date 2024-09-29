/**
 * An async API Client that handles all errors and returns a uniform response.
 */
class ApiClient {
    constructor(apiRoot) {
        console.log("creating", apiRoot)
        this.apiRoot = apiRoot.replace(/\/+$/, "")
    }

    async head({ resource, data = null, params = null }) {
        return this.#request("HEAD", resource, { data, params })
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

    async #request(method, resource, { params, data }) {
        console.log("calling", method, resource, data)
        const result = { data: {}, errors: [] }
        const url = new URL(`${this.apiRoot}/${resource}`)

        if (params) {
            const searchParams = new URLSearchParams(Object.entries(params))
            url.search = searchParams.toString()
        }

        try {
            const response = await fetch(url, {
                method: method,
                // credentials: "include",
                // mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: data ? JSON.stringify(data) : null,
            })
            if (response.ok) {
                result.data = await response.json()
            } else {
                throw new Error(
                    `${method} ${resource} has failed with ${response.status}.`,
                )
            }
        } catch (error) {
            result.errors.push(error)
        }
        return result
    }
}

export const apiClient = new ApiClient(import.meta.env.VITE_BASEURL)
