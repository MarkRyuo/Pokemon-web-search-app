// Environment-based BASE URL (Vite style)
const BASE_URL = import.meta.env.VITE_API_URL || 'https://example.com/api';
const LOCAL_PATH = '/BASE/'; // for static JSON files in public folder

/**
 * API Request with advanced features
 * @param {string} endpoint - API endpoint or local JSON filename
 * @param {object} options - Fetch options + custom config
 * @param {boolean} options.local - Fetch from local JSON
 * @param {boolean} options.auth - Include Authorization header
 * @param {number} options.timeout - Request timeout in ms
 * @param {number} options.retry - Number of retry attempts
 */


async function apiRequest(endpoint, options = {}) {
    const {
        local = false,
        auth = false,
        timeout = 8000,
        retry = 1,
        headers = {},
        ...fetchOptions
    } = options;

    const url = local ? `${LOCAL_PATH}${endpoint}` : `${BASE_URL}${endpoint}`;

    // Handle token if auth is true
    if (auth) {
        const token = localStorage.getItem('token'); // Example token storage
        if (token) headers['Authorization'] = `Bearer ${token}`;
    }

    // Timeout controller
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    let attempt = 0;
    while (attempt < retry) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                signal: controller.signal,
                ...fetchOptions
            });

            clearTimeout(timer);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            attempt++;
            if (attempt >= retry) {
                console.error('API Error:', error.message);
                throw error;
            }
        }
    }
}

export default apiRequest;
