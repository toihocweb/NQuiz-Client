import { ThunkAction } from "redux-thunk";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_RESET,
  LOGIN_SUCCESS,
} from "./store/actionsTypes/loginActionTypes";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_RESET,
  REGISTER_SUCCESS,
} from "./store/actionsTypes/registerActionTypes";
import reducer from "./store/reducers/rootReducer";

export interface IUser {
  name?: string;
  email: string;
  password: string;
  career?: string;
}

export type RootState = ReturnType<typeof reducer>;

// register types

type RegisterActionType =
  | typeof REGISTER_REQUEST
  | typeof REGISTER_SUCCESS
  | typeof REGISTER_FAILURE
  | typeof REGISTER_RESET;

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

//login types

type LoginActionType =
  | typeof LOGIN_REQUEST
  | typeof LOGIN_SUCCESS
  | typeof LOGIN_FAILURE
  | typeof LOGIN_RESET;

export interface LoginState {
  user: IUser | null;
  pending: boolean;
  error: string | null;
}

export interface LoginAction {
  type: LoginActionType;
  payload?: IUser | string;
}

export type LoginThunk = ThunkAction<void, RootState, null, LoginAction>;
