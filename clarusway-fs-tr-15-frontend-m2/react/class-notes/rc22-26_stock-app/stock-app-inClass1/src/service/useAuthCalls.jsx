import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSucces,
} from "../features/authSlice";
import useAxios from "./Useaxios";
const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth.token);
  const { axiosWithToken, axiosPublic } = useAxios();
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      const {data}=await axiosPublic.post("/auth/login", userInfo)
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login işlemi başarali");
      navigate("/stock");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login işlemi başarisiz!");
      console.log(error);
    }
  };
  const register = async (userregister) => {
    console.log(userregister);
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userregister
      );
    
      toastSuccessNotify("Register işlemi başarali");
      dispatch(registerSucces(data));
      navigate("/stock");
      console.log(data);
    } catch (error) {
      toastErrorNotify("Register işlemi başarisiz!");
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logOut = async () => {
    dispatch(fetchStart());
    try {
      // await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken("/auth/logout");
      toastSuccessNotify("LogOut işlemi başarali");
      dispatch(logoutSuccess());
      // navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login işlemi başarisiz!");
      console.log(error);
    }
  };

  return { login, register, logOut };
};

export default useAuthCalls;
