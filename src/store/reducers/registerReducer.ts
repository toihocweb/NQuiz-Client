import { IUser, RegisterAction, RegisterState } from "../../types";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_RESET,
  REGISTER_SUCCESS,
} from "../actionsTypes/registerActionTypes";

const initialState: RegisterState = {
  user: null,
  pending: false,
  error: null,
  isConfirming: false,
};
export default function register(
  state = initialState,
  action: RegisterAction
): RegisterState {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, pending: true };
    case REGISTER_SUCCESS:
      return {
        user: action.payload as IUser,
        pending: false,
        error: null,
        isConfirming: true,
      };
    case REGISTER_FAILURE:
      return {
        user: null,
        pending: false,
        error: action.payload as string,
        isConfirming: false,
      };
    case REGISTER_RESET:
      return { ...state, user: null, error: null, isConfirming: false };
    default:
      return state;
  }
}
