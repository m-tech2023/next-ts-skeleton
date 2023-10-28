import createApi from "@/boot/api";

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
