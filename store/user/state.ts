export interface UserState {
  token: string | null;
}

const initialState: UserState = {
  token: null,
};

export default initialState;
