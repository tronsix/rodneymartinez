import axios from 'axios';

const { REACT_APP_API, REACT_APP_API_KEY } = process.env;

let api = REACT_APP_API;
let key = REACT_APP_API_KEY;

export default axios.create({
   baseURL: api,
   headers: {
       common: {
        'x-api-key': key,
       },
       post: {
        Accept: 'application/json'
       }
   },
});