import axios from 'axios';

const api = axios.create({
    baseURL: 'http://controleprojetos.boodskappe.com/',
    headers: {'Access-Control-Allow-Headers':  '*'}
});

export default api;