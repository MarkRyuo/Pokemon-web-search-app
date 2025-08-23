
const BASE_URL = import.meta.env.VITE_API_URL || '';
const LOCAL_PATH = "/data/"


export async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}, `)

    } catch(error) {

    }
} ;