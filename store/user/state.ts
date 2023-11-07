import { UserData } from "@/services/user/user.service";

export interface UserState {
  token: string | null;
  userDetails: UserData;
}

const initialState: UserState = {
  token: null,
  userDetails: null,
};

export default initialState;
