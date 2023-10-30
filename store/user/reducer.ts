import { SET_USER_TOKEN, CLEAR_USER_TOKEN } from "./action-types";
import { UserState } from "./state";

const initialState: UserState = {
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    case CLEAR_USER_TOKEN:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default userReducer;
