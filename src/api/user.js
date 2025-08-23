import apiRequest from './apiClient.js';

export const getUsers = () => apiRequest('/users', { 
    method : "GET",
    retry: 2 

});

export const createUser = (data) => apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify(data),
    auth: true
});
