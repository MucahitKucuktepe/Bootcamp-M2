import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {

  //TODO: GERÇEKTE GLOBAL STATE 'DEN OKUNMUŞ OLMASI LAZIM!
  const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
