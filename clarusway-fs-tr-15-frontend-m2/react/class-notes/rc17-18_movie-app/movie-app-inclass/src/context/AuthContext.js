import React, { Children, createContext, useContext } from "react";
export const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
  const values = {};
  return (
    <AuthContext.Provider value={values}>{Children} </AuthContext.Provider>
  );
};

export default AuthContextProvider;
