import axios from "axios";

<<<<<<< HEAD
const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
=======
const createApi = (endpoint: string) => {
  const baseURL = `https://pokeapi.co/api/v2/${endpoint}`;
  return axios.create({ baseURL });
};

export default createApi;
>>>>>>> implementado sistema de busca via router query, layout terminado, esperando back-end
