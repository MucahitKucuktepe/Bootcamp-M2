import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {

  //TODO: GERÇEKTE GLOBAL STATE 'DEN OKUNMUŞ OLMASI LAZIM!
  const {user}=useContext(LoginContext)
  return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;