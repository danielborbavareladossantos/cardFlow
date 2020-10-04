import axios from 'axios';

var api = null;

if (process.env.PUBLIC_URL.includes("localhost") || process.env.PUBLIC_URL === '') {
    api = axios.create({
        baseURL: 'http://localhost:3333',
    });
} else {
    api = axios.create({
        baseURL: 'https://titan-server.herokuapp.com',
    });
}

export default api;
