import { Outlet, Navigate } from "react-router-dom";

import { useLoginContext } from "../Context/LoginProvider";

const PrivateRouter = () => {
  //TODO: global state den okunmalı
  const { user } = useLoginContext();
  return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
