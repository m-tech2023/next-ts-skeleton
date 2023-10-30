import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:3000/',
=======
  baseURL: "http://localhost:3000",
>>>>>>> feat: inserido auth service e handleLogin em PF
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
