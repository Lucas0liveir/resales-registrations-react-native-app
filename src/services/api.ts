import axios from "axios";

const API_URL = process && process.env && process.env.API_URL

const api = axios.create({
    baseURL: 'https://api.registro-revendas.com.br',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
});

export { api }