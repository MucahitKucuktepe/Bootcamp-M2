import React from "react";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess,registerSucces } from "../features/authSlice";
const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data))
      toastSuccessNotify("Login işlemi başarali");
      navigate("/stock");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login işlemi başarisiz!");
      console.log(error);
    }
  };
  const register = async (values) => {
    dispatch(fetchStart())
    try {
      const {data}= await axios.post(`
      ${process.env.REACT_APP_BASE_URL}/users/`,values)
      dispatch(registerSucces())
    } catch (error) {
     dispatch(fetchFail())
      console.log(error)
    }
  };

  const logOut = async () => {};

  return { login, register, logOut };
};

export default useAuthCalls;
