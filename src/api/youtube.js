import axios from 'axios';


const KEY = 'AIzaSyBzfJ_8VI_kDAwINv5L5KlzLPT8tolakZE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});

