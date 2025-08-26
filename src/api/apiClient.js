// The core

// Flexible API request function
export async function apiRequest(BASE_URL, endpoint, options = {}) {

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers // Dito ilalagay ang ang another headers
            },
            ...options // at dito naman ang iba 
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.log("Something went wrong", error.message)
    }

}