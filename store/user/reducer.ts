import {
  SET_USER_TOKEN,
  CLEAR_USER_TOKEN,
  SET_USER_DETAILS,
} from "./action-types";
import { UserState } from "./state";

const initialState: UserState = {
  token: null,
  userDetails: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    case CLEAR_USER_TOKEN:
      return { ...state, token: null };
    case SET_USER_DETAILS:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

export default userReducer;
