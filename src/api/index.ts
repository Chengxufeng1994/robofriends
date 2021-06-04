import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    headers: {
      'Cache-Control': {
        'max-age': 31536000,
      },
    },
  },
});

export default instance;
