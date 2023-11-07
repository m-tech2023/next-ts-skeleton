import api from "@/boot/api";

interface RegistrationData {
  document: {
    cpf: string | null;
    cnpj: string | null;
    rg: string | null;
    passport: string | null;
    ie: string | null;
  };
  fullName: string | null;
  nationality: string | null;
  maritalStatus: string | null;
  motherName: string | null;
  fatherName: string | null;
  occupation: string | null;
  company: string | null;
  companyWebsite: string | null;
}
interface ContactDetails {
  email: string | null;
  telephone: string | null;
  cellPhone: string | null;
}
interface Address {
  zipCode: string | null;
  address: string | null;
  number: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
}
export interface UserData {
  registrationData: RegistrationData;
  contactDetails: ContactDetails;
  address: Address;
  _id: string;
  userId: string;
  updatedAt: string;
  __v: number;
}
export interface UserUpdate {
  registrationData: {
    fullName: string | null;
    document?: {
      cpf?: string | null;
      rg?: string | null;
      cnpj?: string | null;
      passport?: string | null;
      ie?: string | null;
    };
    nationality: string | null;
    maritalStatus: string | null;
    motherName: string | null;
    fatherName?: string | null;
    occupation: string | null;
    company: string | null;
    companyWebsite: string | null;
  };
  contactDetails: {
    email: string | null;
    telephone: string | null;
    cellPhone: string | null;
  };
  address: {
    zipCode: string | null;
    address: string | null;
    number: string | null;
    neighborhood: string | null;
    city: string | null;
    state: string | null;
  };
}

const userService = {
  myaccountShow: async () => {
    try {
      const token = sessionStorage.getItem("opportunity-token");
      const res = await api.get("account/personal-data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error("Erro desconhecido:", error.message);
    }
  },
  myaccountPut: async (attributes: UserUpdate) => {
    try {
      const token = sessionStorage.getItem("opportunity-token");
      const res = await api.put("account/personal-data", attributes, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.status;
    } catch (error) {
      return error;
    }
  },
};
export default userService;
