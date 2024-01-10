import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import { useDispatch } from "react-redux";
import useAxios from "./Useaxios";
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice";
const useStock = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      const { data } = await axiosWithToken.get("/firms/");
      dispatch(getFirmsSuccess(data.data));

      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Firma Listeleme İşlemi başarisiz");
      console.log(error);
    }
  };
  const createFirm = async (info) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      const { data } = await axiosWithToken.post("/firms/", info);

      getFirms();
      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Firma Listeleme İşlemi başarisiz");
      console.log(error);
    }
  };
  const deleteFirm = async (id) => {
    console.log(id)
    dispatch(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      //   userInfo
      // );
      await axiosWithToken.delete(`/firms/${id}/`);

      getFirms();
  
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Firma Listeleme İşlemi başarisiz");
      console.log(error);
    }
  };

  return {
    getFirms,
    createFirm,
    deleteFirm
  };
};

export default useStock;
