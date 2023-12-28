import React, { createContext, useContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
  const createUser = async (email, password) => {
    try {
      //? yeni bir kullanıcı oluşturmak için firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/")
      console.log(userCredential.user.auth);
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async (email, password) => {
    try {
      //? mevcut bir kullanıcının giriş yapabilmesi için kullanılan metod firebase metodu
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/")
      console.log(userCredential.user.auth);
    } catch (error) {
      console.log(error);
    }
  };
  const values = { createUser, signIn };
  return (
    <AuthContext.Provider value={values}> {children} </AuthContext.Provider>
  );
};

export default AuthContextProvider;
