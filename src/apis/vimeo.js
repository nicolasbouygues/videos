import axios from 'axios';

const KEY = 'ea8be23546446329e617e3481d7aa59e'

export default axios.create({
    baseURL: 'https://api.vimeo.com/videos',
    params: {
        key: KEY
    } 
});