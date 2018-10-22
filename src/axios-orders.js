import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yn-react-burger.firebaseio.com/'
});

export default instance;