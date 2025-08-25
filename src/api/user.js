import { apiRequest } from './apiClient.js';

// GET
export const getUsers = async () => {
    return await apiRequest('https://api.example.com', '/users');
};

const userData = {
    userId : "01",
    username : "John Doe",
    password : "doe01"
}

// POST
export const createUser = async (userData) => {
    return await apiRequest('https://api.example.com', '/users', {
        method: 'POST',
        body: userData
    });
};

// PUT (update)
export const updateUser = async (userId, userData) => {
    return await apiRequest('https://api.example.com', `/users/${userId}`, {
        method: 'PUT',
        body: userData
    });
};

// DELETE
export const deleteUser = async (userId) => {
    return await apiRequest('https://api.example.com', `/users/${userId}`, {
        method: 'DELETE'
    });
};
