import axios from 'axios';

const KEY = 'AIzaSyAFxBlT9C9ujFE4rnwxm6LNgc-PDNPJIOk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    } 
});