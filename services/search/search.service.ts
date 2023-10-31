import axios from "axios";

export type Pokemon = {
  id?: number;
  name: string;
  url: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

const createApi = (endpoint: string) => {
  const baseURL = `https://pokeapi.co/api/v2/${endpoint}`;
  return axios.create({ baseURL });
};

const SearchService = {
  getSearchPokemons: async (name: string) => {
    try {
      const api = createApi(`pokemon`);
      const res = await api.get(`/${name}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.error("Erro ao buscar pokemon", error);
      throw error;
    }
  },
};

export default SearchService;
