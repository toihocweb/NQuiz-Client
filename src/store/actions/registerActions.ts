import axios from "axios";
import { IUser, RegisterThunk } from "../../types";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actionsTypes/registerActionTypes";

export const register = (user: IUser): RegisterThunk => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios({
      url: "http://202.182.100.160:4000/api/v1/auth/register",
      method: "POST",
      data: user,
    });
    console.log(response.data);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    const errorEmail = error.response.data.error.email;
    dispatch({ type: REGISTER_FAILURE, payload: errorEmail });
  }
};
