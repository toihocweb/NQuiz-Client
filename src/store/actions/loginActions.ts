import axios from "axios";
import Cookies from "js-cookie";
import { IUser, LoginThunk } from "../../types";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionsTypes/loginActionTypes";

export const login = (user: IUser): LoginThunk => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios({
      url: "http://202.182.100.160:4000/api/v1/auth/login",
      method: "POST",
      data: user,
    });
    console.log(response.data);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    const token = response.data.data.token;
    Cookies.set("token", token, {
      expires: 7,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error });
  }
};
