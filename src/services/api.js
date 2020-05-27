import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

const images = axios.create({
    baseURL: 'https://api.unsplash.com',
});
 
export { images, api }