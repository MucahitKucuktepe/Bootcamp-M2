import React from "react";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "./Useaxios";
import { fetchFail, fetchStart, firms } from "../features/stockSlice";
const useStock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth.token);
  const { axiosWithToken, axiosPublic } = useAxios();
  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      const {data}=await axiosWithToken.get("/firms/")
      dispatch(firms(data.data));
      toastSuccessNotify("Firmalar Listelendi");
      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Firma Listeleme İşlemi başarisiz");
      console.log(error);
    }
  };

  return {
getFirms
  };
};

export default useStock;
