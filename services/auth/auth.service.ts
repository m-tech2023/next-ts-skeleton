import api from "@/boot/api";

interface Login {
  username: string;
  password: string;
}

const authService = {
  login: async (attributes: Login) => {
    try {
      const res = await api.post("/auth/login", attributes);

      if (res.status === 201 || res.status === 200) {
        sessionStorage.setItem("opportunity-token", res.data.access_token);
        return res;
      } else {
        throw new Error(`Falha na autenticação. Status: ${res.status}`);
      }
    } catch (error) {
      console.error("Erro durante a autenticação:", error);
      throw error;
    }
  },
};
export default authService;
