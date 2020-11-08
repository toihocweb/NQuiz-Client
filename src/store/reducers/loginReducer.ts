import { IUser, LoginAction, LoginState } from "../../types";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_RESET,
  LOGIN_SUCCESS,
} from "../actionsTypes/loginActionTypes";

const initialState: LoginState = {
  user: null,
  pending: false,
  error: null,
};

export default function login(
  state = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, pending: true };
    case LOGIN_SUCCESS:
      return { user: action.payload as IUser, pending: false, error: null };
    case LOGIN_FAILURE:
      return { user: null, pending: false, error: action.payload as string };
    case LOGIN_RESET:
      return { user: null, pending: false, error: null };
    default:
      return state;
  }
}
