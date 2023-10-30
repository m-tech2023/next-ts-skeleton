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
        sessionStorage.setItem("opportunity-token", res.data.token);
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};
export default authService;
