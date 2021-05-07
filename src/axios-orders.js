import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-65958.firebaseio.com'
});

export default instance;