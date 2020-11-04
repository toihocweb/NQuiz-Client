import { ThunkAction } from "redux-thunk";
import reducer from "./store/reducers/rootReducer";

export interface IUser {
  name: string;
  email: string;
  password: string;
  career: string;
}

type RegisterActionType =
  | typeof REGISTER_REQUEST
  | typeof REGISTER_SUCCESS
  | typeof REGISTER_FAILURE;

export type RootState = ReturnType<typeof reducer>;

export interface RegisterState {
  user: IUser | null;
  pending: boolean;
  error: string | null;
  isConfirming: boolean;
}

export interface RegisterAction {
  type: RegisterActionType;
  payload?: string | IUser;
}

export type RegisterThunk = ThunkAction<void, RootState, null, RegisterAction>;
