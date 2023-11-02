import { UserState } from "../user/state";

export interface RootState {
  user: UserState;
  details: UserState;
}
